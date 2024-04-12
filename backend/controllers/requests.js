/* 
`localhost:3000/api/requests`
----------------------------------------------------------- */

/* require modules
---------------------------------------------------------- */
const jwt = require('jwt-simple')
const express = require('express')
const router = express.Router()

/* db connection, models
---------------------------------------------------------- */
const db = require('../models')

/* require jwt config
--------------------------------------------------------------- */
const config = require('../../jwt.config.js')

/* require jwt config
--------------------------------------------------------------- */
const config = require('../../jwt.config.js')

/* jwt middleware
--------------------------------------------------------------- */
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const decodedToken = jwt.decode(token, config.jwtSecret);
            req.user = decodedToken;
            next();
        } catch (err) {
            res.status(401).json({ message: 'Invalid token' });
        }
    } else {
        res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }
};

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
router.post('/', authMiddleware, (req, res) => {
    db.Request.create({
        ...req.body,
        senderId: req.user.id
    })
        .then(review => res.json(review))
})

// edit request (client & admin access only)
router.put('/:requestId', authMiddleware, async (req, res) => {
    const userRequest = await db.Request.findById(req.params.requestId)
    if (userRequest.senderId == req.user.id) {
        const newReview = await db.Request.findByIdAndUpdate(
            req.params.requestId,
            req.body,
            { new: true }
        )
        res.json(newReview)
    } else {
        res.status(401).json({ message: 'Invalid user or token' })
    }
})

// delete request (client & admin access only)
router.delete('/:requestId', authMiddleware, async (req, res) => {
    const userRequest = await db.Request.findById(req.params.requestId)
    if (userRequest.senderId == req.user.id) {
        const deletedRequest = await db.Request.findByIdAndDelete(req.params.requestId)
        res.send('You deleted review ' + deletedRequest._id)
    } else {
        res.status(401).json({ message: 'Invalid user or token' });
    }
})

/* export to server.js
---------------------------------------------------------- */
module.exports = router