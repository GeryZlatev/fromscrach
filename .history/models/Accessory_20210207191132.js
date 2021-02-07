const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId
    },
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/
    },
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
    // cubes: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Cubes'
    // }]
});

module.expoerts = mongoose.model('Accessory', accessorySchema);