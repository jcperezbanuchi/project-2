const express = require('express')
const PORT = 3000
const app = express()


app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.listen(PORT, (req, res) => {
    console.log('Up and Running ')
})

