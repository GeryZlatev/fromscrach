const Cube = require('../models/Cube');
const id = require('uniqid');
const fs = require('fs');
let db = require('../config/productsDB.json');
const path = require('path');


function getAll(query) {
    let result = db;
    if (query.search) {
        result = result.filter(x => x.name.toLowerCase().includes(query.search));
    }
    return result;
}

function getOne(id) {
    return db.find(x => x.id == id);
}
s

function create(data, callback) {
    let cube = new Cube(
        id(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );


    db.push(cube);


    fs.writeFile(
        path.join(__dirname, '../config/productsDB.json'),
        JSON.stringify(db),
        callback
    )

    // return fs.writeFile(
    //     path.join(__dirname, '../config/productsDB.json'),
    //     JSON.stringify(db)
    // )
}

module.exports = {
    create,
    getAll,
    getOne
}