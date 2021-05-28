const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000
const methodOverride = require('method-override')

//middleware
app.use(express.urlencoded({ extend: true }))
// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false
// }))

//Method Override
app.use(methodOverride('_method'))


app.get('/', (req, res) => {
    res.send('Covid-19 Vaccination Records')
})


app.get('/records', (req, res) => {
    res.render('index.ejs')
})

app.listen(PORT, (req, res) => {
    console.log('up and running')
})