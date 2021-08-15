const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    qualification: {
        type: String,
        trim: true,
        required: true
    },
    dateOfBirth: {
        type: String,
        trim: true,
        required: true
    },
    maritalStatus: {
        type: String,
        trim: true,
        required: true
    },
    selectedRadio: {
        type: String,
        trim: true,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
