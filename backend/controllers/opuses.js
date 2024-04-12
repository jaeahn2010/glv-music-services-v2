/* 
`localhost:3000/api/opuses`
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
// display all available opuses of all musicians
router.get('/', function (req, res) {
    db.Opus.find()
        .then(opuses => res.json([opuses]))
})

// display all available opuses of musician
router.get('/:musicianId', function (req, res) {
    db.Opus.find({ musicianId: req.params.musicianId })
        .then(opuses => res.json(opuses))
})

// create opus (admin access only)
router.post('/', (req, res) => {
    db.Opus.create(req.body)
        .then(opus => res.json(opus))
})

// edit opus (admin access only)
router.put('/:opusId', (req, res) => {
    db.Request.findByIdAndUpdate(
        req.params.opusId,
        req.body,
        { new: true }
    )
        .then(opus => res.json(opus))
})

// delete opus (admin access only)
router.delete('/:opusId', (req, res) => {
    db.Opus.findByIdAndDelete(req.params.opusId)
        .then(() => res.json({ deletedOpusId: req.params.opusId }))
})

/* export to server.js
---------------------------------------------------------- */
module.exports = router