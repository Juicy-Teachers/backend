const express = require('express');
const Animal = require('../models/Animal')

const router = express.Router();

router.get('/', (req,res,next) => {
    Animal.find({}).then((record)=> {
        res.json(record)
    })
})

router.get('/:id', (req, res, next) => {
	Animal.findById({_id: req.params.id }).then((record) => {
		res.json(record);
	});
});

router.post('/', (req, res) => {
    Animal.create(req.body).then((record) => {
        res.json(record);
    })
})

module.exports = router;