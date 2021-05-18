const mongoose = require('mongoose');
mongoose
	.connect('mongodb://localhost/trivia', {
		useNewUrlParser: true,
		useFindAndModify: true,
		useUnifiedTopology: true,
	})
	.then((instance) => {
		console.log(`Connected to mongodb on ${instance.connections[0].name} db`);
	})
	.catch((err) => console.log(err));
module.exports = mongoose;
