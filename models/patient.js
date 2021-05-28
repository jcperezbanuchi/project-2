const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: { type: String, require: true },
    dob: { type: String, require: true },
    vaccinated: { type: Boolean },
    vaccine: { type: String, require: true },
    firstDose: String,
    secondDose: String
})

//this is the line that actually creates the collection in mongo

const Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient