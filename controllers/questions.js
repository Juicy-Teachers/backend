const express = require('express');
const Question = require('../models/Question')

const router = express.Router();

router.get('/', (req,res,next) => {
    Question.find({}).then((record)=> {
        res.json(record)
    })
})

router.get('/:id', (req, res, next) => {
	Question.findById({_id: req.params.id }).then((record) => {
		res.json(record);
	});
});

router.post('/', (req, res) => {
    Question.create(req.body).then((record) => {
        res.json(record);
    })
})

module.exports = router;