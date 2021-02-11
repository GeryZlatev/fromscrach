const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const COOKIE_NAME = config.COOKIE_NAME;
const SECRET = config.SECRET;
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if
}