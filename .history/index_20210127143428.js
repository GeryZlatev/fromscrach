const express = require('express');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];
const handlebars = require('express-handlebars');

const app = express();
app.engine('hbs', handlebars({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home');
})

app.listen(config.port, () => console.log(`Server is running on port ${config.port}...`));