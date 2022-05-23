const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let patient = new Schema({
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
        collection: 'patient'
    });

module.exports = mongoose.model('patient', patient);
