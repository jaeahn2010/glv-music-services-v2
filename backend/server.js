/* modules
---------------------------------------------------------- */
require('dotenv').config()
const express = require('express');
const cors = require('cors')
const path = require('path')

/* db connection, models, seed data
---------------------------------------------------------- */
const db = require('./models');

/* routes in controllers folder
--------------------------------------------------------------- */
const clientsCtrl = require('./controllers/clients')
const musiciansCtrl = require('./controllers/musicians')
const opusesCtrl = require('./controllers/opuses')
const requestsCtrl = require('./controllers/requests')
const reviewsCtrl = require('./controllers/reviews')

/* create express app
---------------------------------------------------------- */
const app = express();

/* middleware
---------------------------------------------------------- */
// cross origin allowance
app.use(cors())
// body parser - used for POST/PUT/PATCH routes:
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

/* mount routes
---------------------------------------------------------- */
// look at controllers folders for certain urls
app.use('/api/clients', clientsCtrl)
app.use('/api/musicians', musiciansCtrl)
app.use('/api/opuses', opusesCtrl)
app.use('/api/requests', requestsCtrl)
app.use('/api/reviews', reviewsCtrl)

// seed with initial opuses set - do this locally before deployment - localhost:3000/seed
app.get('/seed', function (req, res) {
    db.Opus.deleteMany({})
        .then(removedOpuses => {
            console.log(`Removed ${removedOpuses.deletedCount} opuses.`)
            db.Opus.insertMany(db.seedOpuses)
                .then(addedOpuses => {
                    console.log(`Added ${addedOpuses.length} opuses. Reset to original database.`)
                    res.json(addedOpuses)
                })
        })           
});

// Any other route not matching the routes above gets routed by React
// app.get('*', (req, res) => {
//     res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'dist', 'index.html'));
// });

/* listen to port
---------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});