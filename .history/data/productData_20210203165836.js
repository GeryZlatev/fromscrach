const fs = require('fs/promises');
const path = require('path');

module.exports = {
    create(product, callback) {
        db.push(cube);
        fs.writeFile(
            path.join(__dirname, '../config/productsDB.json'),
            JSON.stringify(db),
            callback
        )
    }
}