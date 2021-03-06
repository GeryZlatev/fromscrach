const express = require('express');
const handlebars = require('express-handlebars');

function setupExpress(app) {
    app.engine('hbs', handlebars({
        extname: 'hbs',
        // layoutsDir: ''

        allowedProtoMethods: {
            trim: true
        }

    }));
    app.set('view engine', 'hbs');
    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));
}

module.exports = setupExpress;