const Cube = require('../models/Cube');
const id = require('uniqid');
const fs = require('fs');
let db = require('../config/productsDB.json');
const path = require('path');

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


    db.push(cube);

    fs.writeFile(
        path.join(__dirname, '../config/productsDB.json'), JSON.stringify(db), (err) => {
            if (err) {
                return
            }
        })
}

module.exports = {
    create
}