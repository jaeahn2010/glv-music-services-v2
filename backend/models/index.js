// require mongoose pkg
require('dotenv').config()
const mongoose = require('mongoose');

// connect to mongodb atlas
mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection

db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

// export models & seed to server.js
module.exports = {
    Client: require('./client'),
    Musician: require('./musician'),
    Opus: require('./opus'),
    Request: require('./request'),
    Review: require('./review'),
}