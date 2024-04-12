/* 
`localhost:3000/api/musicians`
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
// display all musicians associated with GLVMS
router.get('/', function (req, res) {
    db.Musician.find()
        .then(musicians => res.json(musicians))
})

// create musician (musician & admin access only)
router.post('/', (req, res) => {
    db.Musician.create(req.body)
        .then(musician => res.json(musician))
})

// edit musician (musician & admin access only)
router.put('/:musicianId', (req, res) => {
    db.Musician.findByIdAndUpdate(
        req.params.musicianId,
        req.body,
        { new: true }
    )
        .then(musician => res.json(musician))
})

// delete request (musician & admin access only)
router.delete('/:musicianId', (req, res) => {
    db.Musician.findByIdAndDelete(req.params.musicianId)
        .then(() => res.json({ deletedMusicianId: req.params.musicianId }))
})

/* export to server.js
---------------------------------------------------------- */
module.exports = router