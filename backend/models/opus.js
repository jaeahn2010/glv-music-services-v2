const mongoose = require('mongoose');

const opusSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        composer: { type: String, required: true },
        movements: [
            {
                movementNumber: { type: Number, required: true },
                movementTitle: { type: String, required: true },
                movementPrice: { type: Number, required: true },
            }
        ],
        instrumentation: [{ type: String, required: true }],
        price: { type: Number, required: true },
    },
);

// export to index.js
module.exports = mongoose.model('Opus', opusSchema);