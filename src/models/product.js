'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const schema = new Schema({
    title:{
        type: String,
        require: true,
        trim: true
    },
    slug:{ // Cadeira gamer = cadeira.gamer
        type: String,
        require: true,
        trim: true,
        index: true,
        unique: true
    },
    description:{
        type: String,
        require: true,
        trim: true,
    },
    price:{
        type: Number,
        require: true
    },
    active:{
        type: Boolean,
        require: true,
        default: true
    },
    tags:[{ // [] representa array
        type: String,
        require: true
    }]
});

module.exports = mongoose.model('Product', schema);