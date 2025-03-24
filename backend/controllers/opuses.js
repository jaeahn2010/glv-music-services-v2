// `localhost:3000/api/opuses`

// req modules
const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()

// db connection, models
const db = require('../models')

// req jwt config
const config = require('../../jwt.config.js')

// jwt middleware
const authMiddleware = (allowedRoles = []) => {
    return (req, res, next) => {
        console.log(req.user)
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
// display all available opuses of all musicians (no access restrictions)
router.get('/', function (req, res) {
    db.Opus.find()
        .then(opuses => res.json(opuses)) // check
})

// display all available opuses of musician (no access restrictions)
router.get('/musician/:musicianId', function (req, res) {
    db.Opus.find({ musicianId: req.params.musicianId })
        .then(opuses => res.json(opuses))
})

// display specific opus (no access restrictions)
router.get('/opus/:opusId', function (req, res) {
    db.Opus.findById(req.params.opusId)
        .then(opus => res.json(opus))
})

// create opus (admin access only)
router.post('/', authMiddleware(['admin']), (req, res) => {
    db.Opus.create(req.body)
        .then(opus => res.json(opus))
        .catch(err => {
            console.error('Error creating opus:', err)
            res.status(500).json({ message: 'Error creating opus', error: err.message })
        })
})

// edit opus (admin access only)
router.put('/:opusId', authMiddleware(['admin']), async (req, res) => {
    const newOpus = await db.Opus.findByIdAndUpdate(
        req.params.opusId,
        req.body,
        { new: true }
    )
    res.json(newOpus)
})

// delete opus (admin access only)
router.delete('/:opusId', authMiddleware(['admin']), async (req, res) => {
    const deletedOpus = await db.Opus.findByIdAndDelete(req.params.opusId)
    res.send('You deleted opus ' + deletedOpus._id)
})

// export to server.js
module.exports = router