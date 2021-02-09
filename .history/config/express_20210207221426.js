const express = require('express');
const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

function setupExpress(app) {
    app.engine('hbs', expressHandlebars({
        extname: 'hbs',
        handlebars: allowInsecurePrototypeAccess(Handlebars)
            // layoutsDir: ''

    }));
    app.set('view engine', 'hbs');
    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));
}

module.exports = setupExpress;