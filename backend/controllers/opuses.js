/* 
`localhost:3000/api/opuses`
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
router.post('/', authMiddleware, (req, res) => {
    if (req.user.isAdmin) {
        db.Opus.create(req.body)
            .then(opus => res.json(opus))
    } else {
        res.status(401).json({ message: 'Invalid user or token' })
    }
    
})

// edit opus (admin access only)
router.put('/:opusId', authMiddleware, async (req, res) => {
    if (req.user.isAdmin) {
        const newOpus = await db.Opus.findByIdAndUpdate(
            req.params.opusId,
            req.body,
            { new: true }
        )
        res.json(newOpus)
    } else {
        res.status(401).json({ message: 'Invalid user or token' })
    }
})

// delete opus (admin access only)
router.delete('/:opusId', authMiddleware, async (req, res) => {
    if (req.user.isAdmin) {
        const deletedOpus = await db.Opus.findByIdAndDelete(req.params.opusId)
        res.send('You deleted opus ' + deletedOpus._id)
    } else {
        res.status(401).json({ message: 'Invalid user or token' });
    }
})

/* export to server.js
---------------------------------------------------------- */
module.exports = router