const Cube = require('../models/Cube');

const fs = require('fs');
const db = require('../config/productsDB.json');
// const path = require('path');
const productData = require('../data/productData');


// function getAll(query) {
//     // let result = productData.getAll();

//     let result = Cube.getAll();
//     if (query.search) {
//         result = result.filter(x => x.name.toLowerCase().includes(query.search));
//     }

//     if (query.from) {
//         result = result.filter(x => Number(x.difficultyLevel) >= query.from);
//     }

//     if (query.to) {
//         result = result.filter(x => Number(x.difficultyLevel) <= query.to);
//     }
//     return result;
// }

// function getOne(id) {
//     // return productData.getAll()
//     //     .find(x => x.id == id);

//     return Cube.getOne(id);
// }


function create(data, callback) {
    let cube = new Cube(
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );

    return cube.save(callback);

    // return productData.create(cube, callback)
    // return fs.writeFile(
    //     path.join(__dirname, '../config/productsDB.json'),
    //     JSON.stringify(db)
    // )
}

module.exports = {
    create,
    // getAll,
    // getOne
}