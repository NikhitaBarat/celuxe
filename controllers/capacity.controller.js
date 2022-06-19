const PantryModel = require('../models/capacity.model')

const getPantrys = async (req, res) => {
    // const Pantry_body = req.body 
    try {
        const Pantry_data = await PantryModel.find()
        res.send(Pantry_data)
    }catch(error){
        res.send(error)
    }
} 

const createPantry = async (req, res) => {
    const Pantry_body = req.body 
    try {
        const Pantry_data = await PantryModel.create(Pantry_body)
        res.send(Pantry_data)
    }catch(error) {
        res.send(error)
    }
}


const deletePantry = async (req, res) => {
    const Pantry_id = req.params.id 
    try {
        const Pantry_data = await PantryModel.findByIdAndDelete(Pantry_id)
        res.send(Pantry_data)
    }catch(error) {
        res.send(error)
    }
}


const getOnePantry = async (req, res) => {
    const Pantry_id = req.params.id 
    try {
        const Pantry_data = await PantryModel.findById(Pantry_id)
        res.send(Pantry_data)
    }catch(error) {
        res.send(error)
    }
}

const updatePantry = async (req, res) => {
    const Pantry_id = req.params.id 
    const Pantry_body = req.body
    try {
        const Pantry_data = await PantryModel.findByIdAndUpdate(Pantry_id, Pantry_body)
        res.send(Pantry_data)
    }catch(error) {
        res.send(error)
    }
}

module.exports = { 
    createPantry,
    deletePantry,
    getPantrys,
    getOnePantry,
    updatePantry
}