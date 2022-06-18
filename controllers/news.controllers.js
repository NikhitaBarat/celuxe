const EventModel = require('../models/news.model')

const getAllNews = async (req, res) => {
    // const news_body = req.body 
    try {
        const news_data = await EventModel.find()
        res.send(news_data)
    }catch(error){
        res.send(error)
    }
} 

const createNews = async (req, res) => {
    const news_body = req.body 
    try {
        const news_data = await EventModel.create(news_body)
        res.send(news_data)
    }catch(error) {
        res.send(error)
    }
}


const deleteNews = async (req, res) => {
    const news_id = req.params.id 
    try {
        const news_data = await EventModel.findByIdAndDelete(news_id)
        res.send(news_data)
    }catch(error) {
        res.send(error)
    }
}


const getOneNews = async (req, res) => {
    const news_id = req.params.id 
    try {
        const news_data = await EventModel.findById(news_id)
        res.send(news_data)
    }catch(error) {
        res.send(error)
    }
}

const updateNews = async (req, res) => {
    const news_id = req.params.id 
    const news_body = req.body
    try {
        const news_data = await EventModel.findByIdAndUpdate(news_id, news_body)
        res.send(news_data)
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