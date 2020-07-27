const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    image1:{
        type: String,
        required: true
    },

    image2:{
        type: String,
        required: true
    },
    image3:{
        type: String,
        required: true
    },
    image4:{
        type: String,
        required: true
    },
    image5:{
        type: String,
        required: true
    },
    image6:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true
    }



})

const Item = mongoose.model('items', itemSchema)

module.exports = Item

