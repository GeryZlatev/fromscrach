const Cube = require('../models/Cube');
const id = require('uniqid');
const fs = require('fs');

const path = require('path');
const productData = require('../data/productData');


function getAll(query) {
    let result = db;
    if (query.search) {
        result = result.filter(x => x.name.toLowerCase().includes(query.search));
    }

    if (query.from) {
        result = result.filter(x => Number(x.difficultyLevel) >= query.from);
    }

    if (query.to) {
        result = result.filter(x => Number(x.difficultyLevel) <= query.to);
    }
    return result;
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

    return productData(cube, callback)
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