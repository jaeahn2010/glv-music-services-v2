// `localhost:3000/api/performances`

// req modules
const jwt = require('jwt-simple')
const express = require('express')
const router = express.Router()

// db connection, models
const db = require('../models/index.js')

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
// display all performances associated with GLVMS
router.get('/', function (req, res) {
    db.Performance.find()
        .then(performances => res.json(performances))
})

// create performance
router.post('/', authMiddleware, (req, res) => {
    console.log(req.body)
    db.Performance.create(req.body)
        .then(performance => {
            // console.log(performance)
            // const token = jwt.encode({ id: performance.id }, config.jwtSecret)
            res.json(performance)
        })
        .catch(() => {
            res.status(401)
                .json({ message: 'Could not create a new performance. Try again.' })
        })
})

// edit performance (admin access only)
router.put('/:performanceId', authMiddleware, async (req, res) => {
    const currentPerformance = await db.Performance.findById(req.params.performanceId)
    if (currentPerformance.performanceId == req.user.id) {
        const newPerformance = await db.Performance.findByIdAndUpdate(
            req.params.performanceId,
            req.body,
            { new: true }
        )
        res.json(newPerformance)
    } else {
        res.status(401).json({ message: 'Invalid user or token' })
    }
})

// delete performance (admin access only)
router.delete('/:performanceId', authMiddleware, async (req, res) => {
    const currentPerformance = await db.Performance.findById(req.params.performanceId)
    if (currentPerformance.musicianId == req.user.id) {
        const deletedPerformance = await db.Performance.findByIdAndDelete(req.params.performanceId)
        res.send('You deleted performance ' + deletedPerformance._id)
    } else {
        res.status(401).json({ message: 'Invalid user or token' })
    }
})

// export to server.js
module.exports = router