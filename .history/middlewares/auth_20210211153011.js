const { COOKIE_NAME } = require('../config/config');

module.exports = function() {
    return (req, res, next) => {
        if (req.cookies);
        next();
    };
}