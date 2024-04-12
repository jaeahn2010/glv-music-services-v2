/* 
`localhost:3000/api/requests`
----------------------------------------------------------- */

/* require modules
---------------------------------------------------------- */
const express = require('express')
const router = express.Router()

/* db connection, models
---------------------------------------------------------- */
const db = require('../models')

/* routes
---------------------------------------------------------- */
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
router.post('/', (req, res) => {
    db.Review.create(req.body)
        .then(review => res.json(review))
})

// edit review (client & admin access only)
router.put('/:reviewId', (req, res) => {
    db.Review.findByIdAndUpdate(
        req.params.reviewId,
        req.body,
        { new: true }
    )
        .then(review => res.json(review))
})

// delete review (client & admin access only)
router.delete('/:reviewId', (req, res) => {
    db.Review.findByIdAndDelete(req.params.reviewId)
        .then(() => res.json({ deletedReviewId: req.params.reviewId }))
})

/* export to server.js
---------------------------------------------------------- */
module.exports = router