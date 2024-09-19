const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        instruments: [{ type: String }],
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, minLength: 8 },
    },
);

// export to index.js
module.exports = mongoose.model('Client', clientSchema);