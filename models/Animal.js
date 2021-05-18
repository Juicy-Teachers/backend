const mongoose = require('../connection');

const animalCatergory = new mongoose.Schema({
	id: Number,
	question: String,
	correctAnswer: String,
	answers: Array,
	time: { type: Date, default: Date.now },
});

const Animal = mongoose.model('Animal', animalCatergory);

module.exports = Animal;
