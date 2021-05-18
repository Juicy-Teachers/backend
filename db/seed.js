const questions = require('./seed.json')
const Question = require('../models/Question')

Question.deleteMany({}).then(()=>{
    return Question.insertMany(questions)
}).catch(console.error).finally(() => {
    process.exit();
})