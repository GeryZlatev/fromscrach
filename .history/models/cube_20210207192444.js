const fs = require('fs');
const path = require('path');
let db = require('../config/productsDB.json');
const Model = require('./Model');
const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxlength: 50 },
    imageUrl: { type: String, required: true, validate: /^https?/, },
    difficultyLevel: { type: Number, required: true, min: 1, max: 6 },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]
});

// ************ Dynamic Validation   ************
// cubeSchema.methods
// cubeSchema.virtual
// cubeSchema.path('imageUrl').get(v)


module.exports = mongoose.model('Cube', cubeSchema);