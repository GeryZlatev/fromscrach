const express = require('express');
const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const auth = require('../middlewares/auth');
const cookieParser = require('cookie-parser');

function setupExpress(app) {
    app.engine('hbs', expressHandlebars({
        extname: 'hbs',
        handlebars: allowInsecurePrototypeAccess(Handlebars)
            // layoutsDir: ''

    }));
    app.set('view engine', 'hbs');
    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(auth())

}

module.exports = setupExpress;