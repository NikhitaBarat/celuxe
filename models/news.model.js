const mongoose = require('mongoose')

const NewsSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: String,
    author: String,
    url: String
})

module.exports = mongoose.model('newsschema', NewsSchema)