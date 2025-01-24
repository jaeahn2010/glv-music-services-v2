const mongoose = require('mongoose')

const musicianSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        instruments: [{ type: String }],
        email: { type: String, required: true, unique: true },
        availableRepertoire: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Opus'}],
        role: { type: String, default: 'musician' },
    },
)

// export to index.js
module.exports = mongoose.model('Musician', musicianSchema)