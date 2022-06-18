const express = require('express')
const router = express.Router()

const { 
    createNews,
    deleteNews,
    getAllNews,
    getOneNews,
    updateNews
} = require('../controllers/news.controllers')

router.get('/all', getAllNews)

router.post('/create', createNews)

router.delete('/:id', deleteNews)

router.get('/:id', getOneNews)

router.put('/:id', updateNews)

module.exports = router