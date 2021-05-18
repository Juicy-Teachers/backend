const express = require('express');
const Animal = require('../models/Animal')

const router = express.Router();

router.get('/', (req,res,next) => {
    Animal.find({}).then((record)=> {
        res.json(record)
    })
})

module.exports = router;