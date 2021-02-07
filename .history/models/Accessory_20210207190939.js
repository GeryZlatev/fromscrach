const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String
    }
    description: {
        type: String,
        required: true,
        maxlength: 50
    },
    difficultyLevel: {
        type: Number,
        min: 1,
        max: 9
    },
    cubes: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cubes'
    }]
})