const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        senderId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Client' },
        recipientId: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Musician' }],
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
    },
);

// export to index.js
module.exports = mongoose.model('Review', reviewSchema);