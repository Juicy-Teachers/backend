const express = require('express')
const app = express()
const questionController = require('./controllers/questions')
const cors = require('cors')

//middleware to parse the data
app.use(express.json())
app.use(express.urlencoded({extended: true }))
app.use(cors())


//controllers
app.use('/trivia/', questionController)

const port  = process.env.PORT || 5000

//listener
app.listen(port, () => {
    console.log(`connected to port ${port}`)
})