const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Patient = require('../models/patient.js')

//index route
router.get('/', (req, res) => {
    Patient.find({}, (error, allFruits) => {
        if (error) {
            res.send(error)
        } else {
            res.render('index.ejs', {
                patient: allPatient
            });
        }
    })
});






module.exports = router;