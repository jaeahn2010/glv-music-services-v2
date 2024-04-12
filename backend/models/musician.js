const mongoose = require('mongoose');

const musicianSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        instruments: [{ type: String }],
        birthdate: { type: Date, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true, minLength: 8 },
        description: { type: String },
        availableRepertoire: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Opus'}]
    },
);

// export to index.js
module.exports = mongoose.model('Musician', musicianSchema);