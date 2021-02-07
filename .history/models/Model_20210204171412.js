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
}
module.exports = Model;