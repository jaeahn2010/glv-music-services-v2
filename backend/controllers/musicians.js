// `localhost:3000/api/musicians`


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
            const decodedToken = jwt.decode(token, config.jwtSecret)
            req.user = decodedToken;
            next();
        } catch (err) {
            res.status(401).json({ message: 'Invalid token' })
        }
    } else {
        res.status(401).json({ message: 'Missing or invalid Authorization header' })
    }
};

// routes
// display all musicians associated with GLVMS
router.get('/', function (req, res) {
    db.Musician.find()
        .then(musicians => res.json(musicians))
})

// create musician (signup route)
router.post('/signup', (req, res) => {
    db.Musician.create(req.body)
        .then(musician => {
            const token = jwt.encode({ id: musician.id }, config.jwtSecret)
            res.json({             
                firstName: musician.firstName,
                lastName: musician.lastName,
                instruments: musician.instruments,
                email: musician.email,
                token: token
            })
        })
        .catch(() => {
            res.status(401)
                .json({ message: 'Could not create a new musician. Your email may have been already taken. Try again.' })
        })
})

// login route
router.post('/login', async (req, res) => {
    const foundMusician = await db.Musician.findOne({ email: req.body.email })
    if (foundMusician && foundMusician.password === req.body.password) {
        const payload = { id: foundMusician.id }
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            firstName: foundMusician.firstName,
            lastName: foundMusician.lastName,
            instruments: foundMusician.instruments,
            email: foundMusician.email,
            token: token
        })
    } else {
        res.status(401)
	    .json({ message: 'Could not find musician with that email/password' })
    }
})

// edit musician (admin access only)
router.put('/:musicianId', authMiddleware, async (req, res) => {
    const currentMusician = await db.Musician.findById(req.params.musicianId)
    if (currentMusician.musicianId == req.user.id) {
        const newMusician = await db.Musician.findByIdAndUpdate(
            req.params.musicianId,
            req.body,
            { new: true }
        )
        res.json(newMusician)
    } else {
        res.status(401).json({ message: 'Invalid user or token' })
    }
})

// delete musician (admin access only)
router.delete('/:clientId', authMiddleware, async (req, res) => {
    const currentMusician = await db.Musician.findById(req.params.musicianId)
    if (currentMusician.musicianId == req.user.id) {
        const deletedMusician = await db.Musician.findByIdAndDelete(req.params.musicianId)
        res.send('You deleted musician ' + deletedMusician._id)
    } else {
        res.status(401).json({ message: 'Invalid user or token' })
    }
})

// export to server.js
module.exports = router