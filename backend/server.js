// modules
require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

// db connection, models, seed data
const db = require('./models')
// const seedOpus = require('./models/seedCentralRepList')

// rts in ctrl folder
const clientsCtrl = require('./controllers/clients')
const musiciansCtrl = require('./controllers/musicians')
const opusesCtrl = require('./controllers/opuses')
const requestsCtrl = require('./controllers/requests')
const reviewsCtrl = require('./controllers/reviews')
const adminsCtrl = require('./controllers/admins')
const performancesCtrl = require('./controllers/performances')

// create express app
const app = express()

// middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true // allow cookies to be sent across requests
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())

// mount routes
app.use('/api/clients', clientsCtrl)
app.use('/api/musicians', musiciansCtrl)
app.use('/api/opuses', opusesCtrl)
app.use('/api/requests', requestsCtrl)
app.use('/api/reviews', reviewsCtrl)
app.use('/api/admins', adminsCtrl)
app.use('/api/performances', performancesCtrl)

// seed with initial opuses set - do this locally before deployment - localhost:3000/seed
// app.get('/seed', function (req, res) {
//     db.Opus.deleteMany({})
//         .then(removedOpuses => {
//             console.log(`Removed ${removedOpuses.deletedCount} opuses.`)
//             db.Opus.insertMany(seedOpus)
//                 .then(addedOpuses => {
//                     console.log(`Added ${addedOpuses.length} opuses. Reset to original database.`)
//                     res.json(addedOpuses)
//                 })
//         })           
// })

// Any other route not matching the routes above gets routed by React
// app.get('*', (req, res) => {
//     res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'dist', 'index.html'))
// })

// listen to port
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT)
})