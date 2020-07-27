const router = require('express').Router()

let Item = require('../models/item.model')

router.route('/:id').get((req,res) =>
{
    Item.findById(req.params.id)
        .then(item => req.json(item))
        .catch(err => res.status(400).json('Error' + err))
})