const mongoose = require('mongoose');

module.exports = (app) => {
    mongoose.connect('mongodb://localhost:3000/cubicle', { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.omce('open', console.log.bind(console, 'Db Connected!'));
}