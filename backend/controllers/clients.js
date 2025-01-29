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
const authMiddleware = (allowedRoles = []) => {
    return (req, res, next) => {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({ message: 'Missing or invalid authentication token' })
        }
        try {
            const decodedToken = jwt.verify(token, config.jwtSecret)
            req.user = decodedToken
            if (allowedRoles.length && !allowedRoles.includes(req.user.role)) {
                return res.status(403).json({ message: 'Forbidden: Insufficient permissions' })
            }
            next()
        } catch (err) {
            res.status(401).json({ message: 'Invalid or expired token' })
        }
    }
}

// routes
// display all clients associated with GLVMS (no access restriction)
router.get('/', function (req, res) {
    db.Client.find()
        .then(clients => res.json(clients))
})

// create client (signup route) (no access restriction)
router.post('/signup', (req, res) => {
    db.Client.create(req.body)
        .then(client => {
            const token = jwt.encode({ id: client.id, role: 'client' }, config.jwtSecret)
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // use 'secure' in production
                sameSite: 'Strict',
                maxAge: 24 * 60 * 60 * 1000,
            })
            res.json({
                email: client.email,
                role: 'client',
                token: token,
            })
        })
        .catch(() => {
            res.status(401)
                .json({ message: 'Could not create a new client account. Your email may have been already taken, or your password could be too weak. Try again.' })
        })
})

// client login route (no access restriction)
router.post('/login', async (req, res) => {
    const foundClient = await db.Client.findOne({ email: req.body.email })
    if (foundClient && foundClient.password === req.body.password) {
        const payload = { id: foundClient.id, role: 'client' }
        const token = jwt.encode(payload, config.jwtSecret)
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // use 'secure' in production
            sameSite: 'Strict',
            maxAge: 24 * 60 * 60 * 1000,
        })
        res.json({
            email: foundClient.email,
            role: foundClient.role,
            token: token,
        })
    } else {
        res.status(401)
	    .json({ message: 'Could not find client account with that email/password' })
    }
})

// edit client (client & admin access only)
router.put('/:clientId', authMiddleware(['client', 'admin']), async (req, res) => {
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
router.delete('/:clientId', authMiddleware(['client', 'admin']), async (req, res) => {
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