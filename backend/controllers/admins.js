// `localhost:3000/api/admins`
// req modules
const jwt = require('jwt-simple')
const express = require('express')
const router = express.Router()

// db connection, models
const db = require('../models')

// req jwt config
const config = require('../../jwt.config.js')

// routes
// admin login route (no access restriction)
router.post('/login', async (req, res) => {
    const foundAdmin = await db.Admin.findOne({ email: req.body.email })
    if (foundAdmin && foundAdmin.password === req.body.password) {
        const payload = { id: foundAdmin.id, role: 'admin' }
        const token = jwt.encode(payload, config.jwtSecret)
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // use 'secure' in production
            sameSite: 'Strict',
            maxAge: 24 * 60 * 60 * 1000,
        })
        res.json({
            email: foundAdmin.email,
            role: foundAdmin.role,
            token: token,
        })
    } else {
        res.status(401)
	    .json({ message: 'Could not find admin account with that email/password' })
    }
})

// export to server.js
module.exports = router