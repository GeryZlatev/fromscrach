const Cube = require('../models/Cube');
const Model = require('../models/Model');

const fs = require('fs');
const db = require('../config/productsDB.json');
// const path = require('path');
// const productData = require('../data/productData');


function getAll(query) {
    // let result = productData.getAll();
    // let result = Model.getAll();
    let result = Cube.find();

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
    return Cube.findById(id);
}


function create(data, callback) {
    let cube = new Cube(data);

    return cube.save(callback);

    // return productData.create(cube, callback)
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