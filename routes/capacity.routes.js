const express = require('express')
const router = express.Router()
const { 
    createPantry,
    deletePantry,
    getPantrys,
    getOnePantry,
    updatePantry
} = require('../controllers/capacity.controller')

router.get('/all', getPantrys)

router.post('/create', createPantry)

router.delete('/:id', deletePantry)

router.get('/:id', getOnePantry)

router.put('/:id', updatePantry)

module.exports = router