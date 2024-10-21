//`localhost:3000/api/requests`

// req modules
const jwt = require('jwt-simple')
const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const OAuth2 = google.auth.OAuth2
const oauth2Client = new OAuth2 (
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI,
)

oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
})

const sendEmail = async (formData) => {
    try {
        const accessToken = await oauth2Client.getAccessToken()
        if (!accessToken.token) {
            throw new Error('No access token returned')
        }
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.GMAIL_USER,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken.token,
            }
        })
        const mailOptions = {
            from: formData.clientEmail,
            to: 'glvmusicservices@gmail.com',
            subject: `Performance Request from ${formData.clientEmail}`, // change to fname/lname later
            text: `eventName: ${formData.eventName},
            locationName: ${formData.eventLocation.locationName},
            address: ${formData.eventLocation.address},
            city: ${formData.eventLocation.city},
            state: ${formData.eventLocation.state},
            zipCode: ${formData.eventLocation.zipCode},
            eventDate: ${formData.eventDate},
            eventStartTime: ${formData.eventStartTime},
            eventEndTime: ${formData.eventEndTime},
            requestedRepertoire: ${formData.mainRequest ? formData.requestedRepertoire.map(rep => `${rep.composer}: ${rep.title} (${rep.movements})`) : formData.requestedRepertoire.map(rep => `${rep[1]}: ${rep[0]}`)},
            additionalComments: ${formData.additionalComments},
            status: pending,`
        }
        const result = await transporter.sendMail(mailOptions)
        return result
    } catch (err) {
        throw new Error(`Failed to send email: ${err.message}`)
    }
}

// db connections, models
const db = require('../models')

// req jwt config
const config = require('../../jwt.config.js')

// jwt middlewawre
const authMiddleware = (req, res, next) => {
    const token = req.cookies.token
    if (token) {
        try {
            const decodedToken = jwt.decode(token, config.jwtSecret)
            req.user = decodedToken
            next()
        } catch (err) {
            res.status(401).json({ message: 'Invalid token' })
        }
    } else {
        res.status(401).json({ message: 'Missing or invalid Authorization header' })
    }
}

// routes
// display all requests made by client
router.get('/:clientId', function (req, res) {
    db.Request.find({ clientId: req.params.clientId })
        .then(requests => res.json(requests))
})

// display all requests made to musician
router.get('/:musicianId', function (req, res) {
    db.Request.find({ musicianId: req.params.musicianId })
        .then(requests => res.json(requests))
})

// create request (client & admin access only)
router.post('/', authMiddleware, (req, res) => {
    db.Request.create({
        ...req.body,
        senderId: req.user.id
    })
        .then(review => res.json(review))
})

router.post('/send-email', authMiddleware, async (req, res) => {
    const formData = req.body
    try {
        const result = await sendEmail(formData)
        console.log('Email sent:', result)
        res.status(200).send('Email sent successfully')
    } catch (err) {
        console.error('Error sending email:', err)
        res.status(500).send('Error sending email')
    }
})

// edit request (client & admin access only)
router.put('/:requestId', authMiddleware, async (req, res) => {
    const userRequest = await db.Request.findById(req.params.requestId)
    if (userRequest.senderId == req.user.id) {
        const newReview = await db.Request.findByIdAndUpdate(
            req.params.requestId,
            req.body,
            { new: true }
        )
        res.json(newReview)
    } else {
        res.status(401).json({ message: 'Invalid user or token' })
    }
})

// delete request (client & admin access only)
router.delete('/:requestId', authMiddleware, async (req, res) => {
    const userRequest = await db.Request.findById(req.params.requestId)
    if (userRequest.senderId == req.user.id) {
        const deletedRequest = await db.Request.findByIdAndDelete(req.params.requestId)
        res.send('You deleted review ' + deletedRequest._id)
    } else {
        res.status(401).json({ message: 'Invalid user or token' });
    }
})

// export to server.js
module.exports = router