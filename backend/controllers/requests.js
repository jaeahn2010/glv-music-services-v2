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
// display all requests made by client
router.get('/:clientId', function (req, res) {
    db.Request.find({ clientId: req.params.clientId })
        .then(requests => res.json(requests))
})

// display all requests made to musician
router.get('/:musicianId', function (req, res) {
    db.Request.find({ musicianId: req.params.musicianId })
        .then(requests => res.json(requests))
})

// create request (client & admin access only)
router.post('/', (req, res) => {
    db.Request.create(req.body)
        .then(request => res.json(request))
})

// edit request (client & admin access only)
router.put('/:requestId', (req, res) => {
    db.Request.findByIdAndUpdate(
        req.params.requestId,
        req.body,
        { new: true }
    )
        .then(request => res.json(request))
})

// delete request (client & admin access only)
router.delete('/:requestId', (req, res) => {
    db.Request.findByIdAndDelete(req.params.requestId)
        .then(() => res.json({ deletedRequestId: req.params.requestId }))
})

/* export to server.js
---------------------------------------------------------- */
module.exports = router