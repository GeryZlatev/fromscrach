const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
console.log(config);
const jwt = require('jsonwebtoken');
module.exports = function() {
    return (req, res, next) => {
        let token = req.cookies[config.COOKIE_NAME];
        console.log(config.COOKIE_NAME);
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