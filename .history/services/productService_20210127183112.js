const Cube = require('../models/Cube');
const id = require('uniqid');

function create(data) {
    let cube = new Cube(
        id(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );
}

module.exports = {
    create
}