const express = require('express')
const app = express()
const animalController = require('./controllers/animals')
const cors = require('cors')
app.use(cors())

//middleware to parse the data
app.use(express.json())
app.use(express.urlencoded({extended: true }))


//controllers
app.use('/trivia', animalController)

//listener
app.listen(8000, () => {
    console.log('connected to port 8000')
})