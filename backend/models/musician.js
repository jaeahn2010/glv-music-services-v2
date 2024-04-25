const mongoose = require('mongoose');

const musicianSchema = new mongoose.Schema(
    {
        userCategory: {type: String, required: true, default: 'musician'},
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        instruments: [{ type: String }],
        birthdate: { type: Date, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, minLength: 8 },
        description: { type: String },
        availableRepertoire: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Opus'}],
        isAdmin: { type: Boolean, required: true, default: false}
    },
);

// export to index.js
module.exports = mongoose.model('Musician', musicianSchema);