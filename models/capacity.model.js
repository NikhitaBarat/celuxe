const mongoose = require('mongoose')

const CapacitySchema = new mongoose.Schema({
    pantry_name: String,
    date: String,
    university_name: String,
    items: [{
        item_name: String,
        quantity: Number
    }]
})

module.exports = mongoose.model('pantrycapacity', CapacitySchema)