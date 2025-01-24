const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, minLength: 8 },
        role: { type: String, default: 'admin' },
    },
)

// export to index.js
module.exports = mongoose.model('Admin', adminSchema)