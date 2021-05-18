const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const animalCatergory = new mongoose.Schema({
	questionId: Number,
	question: String,
	correct: String,
	answers: Array,
	time: { type: Date, default: Date.now },
});

const Animal = mongoose.model('Animal', animalCatergory);

module.exports = Animal;
