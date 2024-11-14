const mongoose = require('mongoose')

const performanceSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        locationName: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        date: { type: Date, required: true },
        time: { type: String, required: true },
        featuredGLVMSMusicians: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Musician'}],
        collaborators: [{ type: String }],
        description: { type: String },
    },
)

// export to index.js
module.exports = mongoose.model('Performance', performanceSchema)