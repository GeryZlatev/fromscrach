const mongoose = require('mongoose');

module.exports = (app) => {
    mongoose.connect('mongodb://localhost/cubicle', { useNewUrlParser: true, useUnifiedTopology: true })
}