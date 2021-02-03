const fs = require('fs/promises');
const path = require('path');

module.exports = {
    create(product, callback) {
        fs.writeFile(
            path.join(__dirname, '../config/productsDB.json'),
            JSON.stringify(db),
            callback
        )
    }
}