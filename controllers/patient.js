const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Patient = require('../models/patient.js')

//index route
router.get('/', (req, res) => {
    Patient.find({}, (error, allPatients) => {
        if (error) {
            res.send(error)
        } else {
            res.render('index.ejs', {
                patient: allPatients
            });
        }
    })
});

router.get('/new', (req, res) => {
    res.render('new.ejs')
})

//
router.get('/:id', (req, res) => {
    Patient.findById(req.params.id, (error, foundPatient) => {
        res.render('show.ejs', {
            patient: foundPatient
        })
    })
})




module.exports = router;