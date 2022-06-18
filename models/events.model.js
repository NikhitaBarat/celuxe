const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    event_name: String,
    date: String,
    hostedby: String,
    venue: String,
    description: String
})

module.exports = mongoose.model('eventschema', EventSchema)