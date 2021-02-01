const Cube = require('../models/Cube');
const id = require('uniqid');

function createProduct(data) {
    let cube = new Cube(
        id(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );
}