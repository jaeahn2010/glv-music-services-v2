// `localhost:3000/api/clients`
// req modules
const jwt = require('jwt-simple')
const express = require('express')
const router = express.Router()

// db connection, models
const db = require('../models')

// req jwt config
const config = require('../../jwt.config.js')

// jwt middleware
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization
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
// create client (signup route)
router.post('/signup', (req, res) => {
    db.Client.create(req.body)
        .then(client => {
            const token = jwt.encode({ id: client.id }, config.jwtSecret)
            res.json({
                firstName: client.firstName,
                lastName: client.lastName,
                instruments: client.instruments,
                email: client.email,
                token: token
            })
        })
        .catch(() => {
            res.status(401)
                .json({ message: 'Could not create a new client account. Your email may have been already taken, or your password could be too weak. Try again.' })
        })
})

// login route
router.post('/login', async (req, res) => {
    const foundClient = await db.Client.findOne({ email: req.body.email })
    if (foundClient && foundClient.password === req.body.password) {
        const payload = { id: foundClient.id }
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            firstName: foundClient.firstName,
            lastName: foundClient.lastName,
            instruments: foundClient.instruments,
            email: foundClient.email,
            token: token
        })
    } else {
        res.status(401)
	    .json({ message: 'Could not find client account with that email/password' })
    }
})

// edit client (client & admin access only)
router.put('/:clientId', authMiddleware, async (req, res) => {
    const currentClient = await db.Client.findById(req.params.clientId)
    if (currentClient.clientId == req.user.id) {
        const newClient = await db.Client.findByIdAndUpdate(
            req.params.clientId,
            req.body,
            { new: true }
        )
        res.json(newClient)
    } else {
        res.status(401).json({ message: 'Invalid user or token' })
    }
})

// delete client (client & admin access only)
router.delete('/:clientId', authMiddleware, async (req, res) => {
    const currentClient = await db.Client.findById(req.params.clientId)
    if (currentClient.clientId == req.user.id) {
        const deletedClient = await db.Client.findByIdAndDelete(req.params.clientId)
        res.send('You deleted client ' + deletedClient._id)
    } else {
        res.status(401).json({ message: 'Invalid user or token' })
    }
})

// export to server.js
module.exports = router