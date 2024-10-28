// `localhost:3000/api/admins`
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
    const token = req.cookies.token
    if (token) {
        try {
            const decodedToken = jwt.verify(token, config.jwtSecret)
            req.user = decodedToken
            next()
        } catch (err) {
            res.status(401).json({ message: 'Invalid token' })
        }
    } else {
        res.status(401).json({ message: 'Missing or invalid authentication token' })
    }
}

// routes
// login route
router.post('/login', async (req, res) => {
    const foundAdmin = await db.Admin.findOne({ email: req.body.email })
    if (foundAdmin && foundAdmin.password === req.body.password) {
        const payload = { id: foundAdmin.id }
        const token = jwt.encode(payload, config.jwtSecret)
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', //use 'secure' in production
            sameSite: 'Strict',
            maxAge: 24 * 60 * 60 * 1000,
        })
        res.json({
            email: foundAdmin.email,
        })
    } else {
        res.status(401)
	    .json({ message: 'Could not find admin account with that email/password' })
    }
})

// export to server.js
module.exports = router