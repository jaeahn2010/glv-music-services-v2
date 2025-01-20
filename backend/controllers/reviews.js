// `localhost:3000/api/reviews`

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
            res.status(401).json({ message: 'Invalid or expired token' })
        }
    } else {
        res.status(401).json({ message: 'Missing or invalid token' })
    }
}

// routes
// display all reviews made by client
router.get('/:clientId', function (req, res) {
    db.Review.find({ clientId: req.params.clientId })
        .then(reviews => res.json(reviews))
})

// display all reviews made to musician
router.get('/:musicianId', function (req, res) {
    db.Review.find({ musicianId: req.params.musicianId })
        .then(reviews => res.json(reviews))
})

// create review (client & admin access only)
router.post('/', authMiddleware, (req, res) => {
    db.Review.create({
        ...req.body,
        senderId: req.user.id
    })
        .then(review => res.json(review))
        .catch(err => {
            console.error('Error creating review:', err)
            res.status(500).json({ message: 'Error creating review', error: err.message })
        })
})

// edit review (client & admin access only)
router.put('/:reviewId', authMiddleware, async (req, res) => {
    const userReview = await db.Review.findById(req.params.reviewId)
    if (userReview.senderId == req.user.id) {
        const newReview = await db.Review.findByIdAndUpdate(
            req.params.reviewId,
            req.body,
            { new: true }
        )
        res.json(newReview)
    } else {
        res.status(401).json({ message: 'Invalid user or token' })
    }
})

// delete review (client & admin access only)
router.delete('/:reviewId', authMiddleware, async (req, res) => {
    const userReview = await db.Review.findById(req.params.reviewId)
    if (userReview.senderId == req.user.id) {
        const deletedReview = await db.Review.findByIdAndDelete(req.params.reviewId)
        res.send('You deleted review ' + deletedReview._id)
    } else {
        res.status(401).json({ message: 'Invalid user or token' });
    }
})

// export to server.js
module.exports = router