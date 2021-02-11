const { COOKIE_NAME } = require('../config/config');
const jwt = require('jsonwebtoken');
module.exports = function() {
    return (req, res, next) => {
        let token = req.cookies[COOKIE_NAME];
        if (token) {
            //TODO: verify token!
            let userId = jwt.verify(token)
        };
        next();
    };
}