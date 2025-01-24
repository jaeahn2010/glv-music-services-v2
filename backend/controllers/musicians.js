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
            res.status(401).json({ message: 'Invalid or expired token' })
        }
    }
}

// routes
// display all musicians associated with GLVMS
router.get('/', function (req, res) {
    db.Musician.find()
        .then(musicians => res.json(musicians))
})

// get musician by id (no access restriction)
router.get('/musician/:musicianId', function (req, res) {
    db.Musician.findById(req.params.musicianId)
        .then(musician => res.json(musician))
})

// create musician (signup route) (no access restriction)
router.post('/signup', (req, res) => {
    db.Musician.create(req.body)
        .then(musician => {
            const token = jwt.encode({ id: musician.id, role: 'musician' }, config.jwtSecret)
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // use 'secure' in production
                sameSite: 'Strict',
                maxAge: 24 * 60 * 60 * 1000,
            })
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

// musician login route (no access restriction)
router.post('/login', async (req, res) => {
    const foundMusician = await db.Musician.findOne({ email: req.body.email })
    if (foundMusician && foundMusician.password === req.body.password) {
        const payload = { id: foundMusician.id, role: 'musician' }
        const token = jwt.encode(payload, config.jwtSecret)
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // use 'secure' in production
            sameSite: 'Strict',
            maxAge: 24 * 60 * 60 * 1000,
        })
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

// edit musician (admin & musician access only)
router.put('/:musicianId', authMiddleware(['admin', 'musician']), async (req, res) => {
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

// delete musician (admin & musician access only)
router.delete('/:clientId', authMiddleware(['admin', 'musician']), async (req, res) => {
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