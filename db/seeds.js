const animals = require('./animal.json')
const seedData = require('./seed.json')
const Animal = require('../models/Animal')

Animal.deleteMany({}).then(()=>{
    return Animal.insertMany(animals)
}).catch(console.error).finally(() => {
    process.exit();
})