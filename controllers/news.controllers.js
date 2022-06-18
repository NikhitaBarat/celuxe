const NewsModel = require('../models/news.model')

const getAllNews = async (req, res) => {
    try {
        const event_data = await NewsModel.find()
        res.send(event_data)
    }catch(error){
        res.send(error)
    }
} 

const createNews = async (req, res) => {
    const event_body = req.body 
    try {
        const event_data = await NewsModel.create(event_body)
        res.send(event_data)
    }catch(error) {
        res.send(error)
    }
}


const deleteNews = async (req, res) => {
    const event_id = req.params.id 
    try {
        const event_data = await NewsModel.findByIdAndDelete(event_id)
        res.send(event_data)
    }catch(error) {
        res.send(error)
    }
}


const getOneNews = async (req, res) => {
    const event_id = req.params.id 
    try {
        const event_data = await NewsModel.findById(event_id)
        res.send(event_data)
    }catch(error) {
        res.send(error)
    }
}

const updateNews = async (req, res) => {
    const event_id = req.params.id 
    const event_body = req.body
    try {
        const event_data = await NewsModel.findByIdAndUpdate(event_id, event_body)
        res.send(event_data)
    }catch(error) {
        res.send(error)
    }
}

module.exports = { 
    createNews,
    deleteNews,
    getAllNews,
    getOneNews,
    updateNews
}