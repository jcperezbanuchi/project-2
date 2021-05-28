const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const methodOverride = require('method-override')

//app configuration
const app = express()
const MONGODBNAME = process.env.MONGODBNAME || 'mongodb://localhost:27017/' + 'vaccine-records';

//middleware
app.use(express.urlencoded({ extend: true }))
// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false
// }))



//external middleware
mongoose.connect(MONGODBNAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})


//Method Override
app.use(methodOverride('_method'))


//controllers
const patientControllers = require('./controllers/patient.js');
app.use('/patients', patientControllers);

app.get('/', (req, res) => {
    res.redirect('/patients')
})

app.listen(PORT, (req, res) => {
    console.log('up and running')
})



