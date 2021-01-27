const express = require('express');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env]

const app = express();
console.log(process.env.NODE_EN)
app.listen(config.port);