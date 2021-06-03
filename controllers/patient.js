const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Patient = require('../models/patient.js')


//index route
router.get('/patients/', (req, res) => {
    Patient.find({}, (error, allPatients) => {
        if (error) {
            res.send(error)
        } else {
            res.render('index.ejs', {
                patient: allPatients,
                currentUser: req.session.currentUser
            });
        }
    })
});
//login or register route
router.get('/', (req, res) => {
    res.render('login.ejs')
})

//new route
router.get('/patients/new', (req, res) => {
    res.render('new.ejs')
})

//create
router.post('/patients', (req, res) => {
    if (req.body.fullyVaccinated === 'on') {
        req.body.fullyVaccinated = true
    } else {
        req.body.fullyVaccinated = false
    }
    Patient.create(req.body, (error, createdPatient) => {
        res.redirect('/patients')
    })
})

//show 
router.get('/patients/:id', (req, res) => {
    Patient.findById(req.params.id, (error, foundPatient) => {
        res.render('show.ejs', {
            patient: foundPatient,
            currentUser: req.session.currentUser
        })
    })
})

//Edit show 
router.get('/patients/:id/edit', (req, res) => {
    Patient.findById(req.params.id, (error, foundPatient) => {
        res.render('edit.ejs', {
            patient: foundPatient,
            currentUser: req.session.currentUser
        })
    })
})


// EDIT
router.put('/patients/:id', (req, res) => {
    if (req.body.fullyVaccinated === 'on') {
        req.body.fullyVaccinated = true
    } else {
        req.body.fullyVaccinated = false
    }
    Patient.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedModel) => {
        res.redirect('/patients')
    })
})

//Delete
router.delete('/patients/:id', (req, res) => {
    Patient.findByIdAndRemove(req.params.id, (error, deletedFruit) => {
        res.redirect('/patients')
    })
})


module.exports = router;