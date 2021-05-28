const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const methodOverride = require('method-override')

const MONGODBNAME = process.env.MONGODBNAME

//middleware
app.use(express.urlencoded({ extend: true }))
// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false
// }))

// const MONGODBNAME = process.env.MONGODBNAME || 'mongodb://localhost:27017/' + `project-2-records`;

mongoose.connect(`mongodb://localhost:27017/${MONGODBNAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// mongodb + srv://juanco20:<password>@cluster0.rcyr2.mongodb.net/project-2-records?retryWrites=true&w=majority

//Method Override
app.use(methodOverride('_method'))

const patientControllers = require('./controllers/patient.js');
app.use('/patients', patientControllers);


app.listen(PORT, (req, res) => {
    console.log('up and running')
})