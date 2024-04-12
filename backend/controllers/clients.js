/* 
`localhost:3000/api/clients`
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
// create client (client & admin access only)
router.post('/', (req, res) => {
    db.Client.create(req.body)
        .then(client => res.json(client))
})

// edit client (client & admin access only)
router.put('/:clientId', (req, res) => {
    db.Client.findByIdAndUpdate(
        req.params.clientId,
        req.body,
        { new: true }
    )
        .then(client => res.json(client))
})

// delete request (client & admin access only)
router.delete('/:clientId', (req, res) => {
    db.Client.findByIdAndDelete(req.params.clientId)
        .then(() => res.json({ deletedClientId: req.params.clientId }))
})

/* export to server.js
---------------------------------------------------------- */
module.exports = router