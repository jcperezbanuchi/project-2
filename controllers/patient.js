const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Patient =


    app.get('/', (req, res) => {
        res.send('Covid-19 Vaccination Records')
    })


router.get('/records', (req, res) => {
    res.render('index.ejs')
})