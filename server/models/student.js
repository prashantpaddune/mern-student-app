const mongoose = require('mongoose');

const options = {
    type: String,
    trim: true,
    required: true
}

const studentSchema = new mongoose.Schema({
    firstName: options,
    lastName: options,
    qualification: options,
    dateOfBirth: options,
    maritalStatus: options,
    selectedRadio: options
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
