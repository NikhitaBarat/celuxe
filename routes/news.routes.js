const express = require('express')
const router = express.Router()
const { createNews, deleteNews, getAllNews, getOneNews, updateNews } = require('../controllers/events.controller')
router.get('/all', getEvents)

router.post('/create', createEvent)

router.delete('/:id', deleteEvent)

router.get('/:id', getOneEvent)

router.put('/:id', updateEvent)

module.exports = router