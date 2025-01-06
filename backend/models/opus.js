const mongoose = require('mongoose')

const opusSchema = new mongoose.Schema(
    {
        repType: { type: String, required: true },
        composer: { type: String, required: true },
        title: { type: String, required: true },
        movements: [
            {
                movementTitle: { type: String },
                movementOfferingMusicians: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Musician'}],
            }
        ],
        instrumentation: [{ type: String, required: true }],
        offeringMusicians: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Musician'}],
    },
)

// export to index.js
module.exports = mongoose.model('Opus', opusSchema)