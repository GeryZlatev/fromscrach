const fs = require('fs');
const path = require('path');
let db = require('../config/productsDB.json');
const Model = require('./Model');
const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxlength: 50 },
    imageUrl: { type: String, required: true, validate: /^https?/, },
    difficultyLevel: { type: Number, required: true, min: 1, max: 6 },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]
})

class Cube extends Model {
    constructor(id, name, description, imageUrl, difficultyLevel) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
    }



    // save(callback) {
    //     db.push(this);
    //     return fs.writeFile(
    //         path.join(__dirname, '../config/productsDB.json'),
    //         JSON.stringify(db),
    //         callback
    //     )
    // }

    // static getAll() {
    //     return db;
    // }

    // static getOne(id) {
    //     return db.find(x => x.id == id);
    // }
}

module.exports = Cube;