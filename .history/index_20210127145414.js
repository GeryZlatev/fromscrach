const express = require('express');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];
const handlebars = require('express-handlebars');

const app = express();



app.get('/', (req, res) => {
    res.render('home', { layout: false });
})

app.listen(config.port, () => console.log(`Server is running on port ${config.port}...`));