const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const COOKIE_NAME = config.COOKIE_NAME;
const SECRET = config.SECRET;
const jwt = require('jsonwebtoken');
module.exports = function() {
    return (req, res, next) => {
        let token = req.cookies[COOKIE_NAME];
        console.log(COOKIE_NAME);
        if (token) {
            //TODO: verify token!
            jwt.verify(token, SECRET, function(err, decoded) {
                if (err) {
                    console.log(err);
                }
                console.log(decoded);
            })

        };
        next();
    };
}