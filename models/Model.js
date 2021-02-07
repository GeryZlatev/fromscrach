const fs = require('fs');
const path = require('path');
let db = require('../config/productsDB.json');

class Model {
    save(callback) {
        db.push(this);
        return fs.writeFile(
            path.join(__dirname, '../config/productsDB.json'),
            JSON.stringify(db),
            callback
        )
    }

    static getAll() {
        return db;
    }

    static getOne(id) {
        return db.find(x => x.id == id);
    }
}
module.exports = Model;