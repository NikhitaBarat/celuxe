const NewsModel = require('../models/news.model')

const getEvents = async (req, res) => {
    try {
        const event_data = await NewsModel.find()
        res.send(event_data)
    }catch(error){
        res.send(error)
    }
} 

const createEvent = async (req, res) => {
    const event_body = req.body 
    try {
        const event_data = await NewsModel.create(event_body)
        res.send(event_data)
    }catch(error) {
        res.send(error)
    }
}


const deleteEvent = async (req, res) => {
    const event_id = req.params.id 
    try {
        const event_data = await NewsModel.findByIdAndDelete(event_id)
        res.send(event_data)
    }catch(error) {
        res.send(error)
    }
}


const getOneEvent = async (req, res) => {
    const event_id = req.params.id 
    try {
        const event_data = await NewsModel.findById(event_id)
        res.send(event_data)
    }catch(error) {
        res.send(error)
    }
}

const updateEvent = async (req, res) => {
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
    createEvent,
    deleteEvent,
    getEvents,
    getOneEvent,
    updateEvent
}