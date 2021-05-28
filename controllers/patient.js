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
//new route
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

//create
router.post('/', (req, res) => {

    Patient.create(req.body, (error, createdFruit) => {
        res.redirect('/patients')
    })
})

//
router.get('/:id', (req, res) => {
    Patient.findById(req.params.id, (error, foundPatient) => {
        res.render('show.ejs', {
            patient: foundPatient
        })
    })
})

//EDIT
router.put('/:id', (req, res) => {
    Patient.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedModel) => {
        res.redirect('/patients')
    })
})



module.exports = router;