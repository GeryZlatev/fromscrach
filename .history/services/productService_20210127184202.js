const Cube = require('../models/Cube');
const id = require('uniqid');
const fs = require('fs');
const db = require('../config/productsDB.json')

function getAll() {
    return db;
}

function create(data) {
    let cube = new Cube(
        id(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );
}

fs.writeFile('')

module.exports = {
    create
}