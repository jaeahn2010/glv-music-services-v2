// `localhost:3000/api/performances`

// req modules
const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()

// db connection, models
const db = require('../models/index.js')

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
            console.error("JWT verification failed: ", err)
            res.status(401).json({ message: 'Invalid or expired token' })
        }
    }
}

// routes
// display all performances associated with GLVMS (no access restrictions)
router.get('/', function (req, res) {
    db.Performance.find()
        .then(performances => res.json(performances))
})

// display all performances associated with musician (no access restrictions)
router.get('/:musicianId', function (req, res) {
    db.Performance.find({ musicianId: req.params.musicianId })
        .then(performances => res.json(performances))
})

// create performance (admin access only)
router.post('/', authMiddleware(['admin']), (req, res) => {
    db.Performance.create(req.body)
        .then(performance => res.json(performance))
        .catch(err => {
            console.error('Error creating performance:', err)
            res.status(500).json({ message: 'Error creating performance', error: err.message })
        })
})

// edit performance (admin access only)
router.put('/:performanceId', authMiddleware(['admin']), async (req, res) => {
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
router.delete('/:performanceId', authMiddleware(['admin']), async (req, res) => {
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