const fs = require('fs');
const path = require('path');
let db = require('../config/productsDB.json');

class Cube {
    constructor(id, name, description, imageUrl, difficultyLevel) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
    }

    save() {

    }
}

module.exports = Cube;