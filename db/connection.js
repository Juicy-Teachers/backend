const mongoose = require('mongoose');
mongoose.Promise = Promise

const mongoURI = process.env.NODE_ENV === 'production'
	? process.env.DB_URL : 'mongodb://localhost/trivia'

mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		useFindAndModify: true,
		useUnifiedTopology: true,
	})
	.then((instance) => {
		console.log(`Connected to mongodb on ${instance.connections[0].name} db`);
	})
	.catch((err) => console.log(err));
	
module.exports = mongoose;
