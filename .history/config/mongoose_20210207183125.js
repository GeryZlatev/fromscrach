const mongoose = require('mongoose');

module.exports = (app) => {
    mongoose.connect('mongodb://localhost:3000/cubicle', { useNewUrlParser: true, useUnifiedTopology: true })
}