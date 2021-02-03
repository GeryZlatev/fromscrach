const fs = require('fs');
const path = require('path');
let db = require('../config/productsDB.json');

module.exports = {

    getAll() {
        return db;
    },
    create(product, callback) {
        db.push(product);
        return fs.writeFile(
            path.join(__dirname, '../config/productsDB.json'),
            JSON.stringify(db),
            callback
        )
    }
}