const mongoose = require('mongoose');
const ShelterSchema = new mongoose.Schema({
    name: { 
        type: String,
        required:[
            true,
            "Pet name is required!",
        ],
        minlength: [
            3,
            "Pet name must be 3 characters!",
            ],
            unique: true
    },
    type: {
        type: String,
        required: [
            true,
            "Pet Type name required!",
        ],
        minlength: [
            3,
            "Pet Type must be 3 characters!",
        ]
    },
    description: {
        type: String,
        required: [
            true,
            "Pet Description is required!",
        ],
        minlength: [
            3,
            "Pet Description must be 3 characters!",
        ]
    },
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String}

}, { timestamps: true });
module.exports.Shelter = mongoose.model('Shelter', ShelterSchema);