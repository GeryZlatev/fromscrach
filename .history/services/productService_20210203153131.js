const Cube = require('../models/Cube');
const id = require('uniqid');
const fs = require('fs');
let db = require('../config/productsDB.json');
const path = require('path');


function getAll() {
    return db;
}

function getOne(id) {
    return db.find(x => x.id == id);
}

function create(data, callback) {
    let cube = new Cube(
        id(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );


    db.push(cube);
    console.log(db);

    fs.writeFile(
        path.join(__dirname, '../config/productsDB.json'),
        JSON.stringify(db),
        callback
    )
}

module.exports = {
    create,
    getAll,
    getOne
}