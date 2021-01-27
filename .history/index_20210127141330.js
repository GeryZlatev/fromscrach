const express = require('express');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env]

const app = express();

app.listen(config.port);