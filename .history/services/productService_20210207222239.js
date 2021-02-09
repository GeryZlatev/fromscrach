const Cube = require('../models/Cube');
const Model = require('../models/Model');

const fs = require('fs');
const db = require('../config/productsDB.json');
// const path = require('path');
// const productData = require('../data/productData');


async function getAll(query, callback) {
    // let result = productData.getAll();
    // let result = Model.getAll();
    let result = await Cube.find({});

    if (query.search) {
        result = result.filter(x => x.name.toLowerCase().includes(query.search));
    }

    if (query.from) {
        result = result.filter(x => Number(x.difficultyLevel) >= query.from);
    }

    if (query.to) {
        result = result.filter(x => Number(x.difficultyLevel) <= query.to);
    }
    console.log(result);
    return result;
}

async function getOne(id) {
    let cube = await Cube.findById(id);
    return cube;
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