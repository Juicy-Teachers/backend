const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

//middleware to parse the data
app.use(express.json())
app.use(express.urlencoded({extended: true }))


//controllers
app.set('port', process.env.PORT || 8000)

//listener
app.listen(app.get('port'), () => {
    console.log('connected to port 8000')
})