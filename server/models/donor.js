const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let donor = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    bloodType: {
        type: String,
    },
    amount:{
        type:Number,
    }
},
    {
        collection: 'donor'
    });

module.exports = mongoose.model('donor', donor);
