const express = require('express');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

const app = express();
// const expressConfig = require('./config/express');
// expressConfig(app);
require('./config/express')(app);

app.get('/', (req, res) => {
    res.render('home', { layout: false });
});

app.listen(config.port, () => console.log(`Server is running on port ${config.port}...`));