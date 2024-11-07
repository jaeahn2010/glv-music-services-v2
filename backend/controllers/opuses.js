// `localhost:3000/api/opuses`

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
// display all available opuses of all musicians
router.get('/', function (req, res) {
    db.Opus.find()
        .then(opuses => res.json([opuses]))
})

// display all available opuses of musician
router.get('/musician/:musicianId', function (req, res) {
    db.Opus.find({ musicianId: req.params.musicianId })
        .then(opuses => res.json(opuses))
})

// display specific opus
router.get('/opus/:opusId', function (req, res) {
    db.Opus.findById(req.params.opusId)
        .then(opus => res.json(opus))
})

// create opus (admin access only)
router.post('/', authMiddleware, (req, res) => {
    db.Opus.create(req.body)
        .then(opus => res.json(opus))
    // if (req.user.isAdmin) {
    //     db.Opus.create(req.body)
    //         .then(opus => res.json(opus))
    // } else {
    //     res.status(401).json({ message: 'Invalid user or token' })
    // }
})

// edit opus (admin access only)
router.put('/:opusId', authMiddleware, async (req, res) => {
    const newOpus = await db.Opus.findByIdAndUpdate(
        req.params.opusId,
        req.body,
        { new: true }
    )
    res.json(newOpus)
    // if (req.user.isAdmin) {
    //     const newOpus = await db.Opus.findByIdAndUpdate(
    //         req.params.opusId,
    //         req.body,
    //         { new: true }
    //     )
    //     res.json(newOpus)
    // } else {
    //     res.status(401).json({ message: 'Invalid user or token' })
    // }
})

// delete opus (admin access only)
router.delete('/:opusId', authMiddleware, async (req, res) => {
    const deletedOpus = await db.Opus.findByIdAndDelete(req.params.opusId)
    res.send('You deleted opus ' + deletedOpus._id)
    // if (req.user.isAdmin) {
    //     const deletedOpus = await db.Opus.findByIdAndDelete(req.params.opusId)
    //     res.send('You deleted opus ' + deletedOpus._id)
    // } else {
    //     res.status(401).json({ message: 'Invalid user or token' })
    // }
})

// export to server.js
module.exports = router