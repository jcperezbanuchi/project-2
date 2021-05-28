const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: { type: String, require: true },
    address: { type: String, require: true },
    vaccinated: { type: String, require: true }
})

//this is the line that actually creates the collection in mongo

const Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient