const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema(
    {
        senderId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Client' },
        recipientId: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Musician' }],
        eventName: { type: String, required: true },
        eventLocation: {
            locationName: { type: String, required: true },
            address: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zipCode: { type: Number, required: true },
        },
        eventDate: { type: Date, required: true },
        eventStartTime: { type: String, required: true },
        eventEndTime: { type: String, required: true },
        requestedRepertoire: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Opus'}],
        additionalComments: { type: String },
        status: { type: String, required: true, default: "Pending" }
    },
);

// export to index.js
module.exports = mongoose.model('Request', requestSchema);