const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const questionCatergory = new mongoose.Schema({
	category: String,
	questionId: Number,
	question: String,
	correct: String,
	answers: Array,
	time: { type: Date, default: Date.now },
});

const Question = mongoose.model('Question', questionCatergory);

module.exports = Question;
