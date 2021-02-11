const { COOKIE_NAME, SECRET } = require('../config/config');
const jwt = require('jsonwebtoken');
module.exports = function() {
        return (req, res, next) => {
            let token = req.cookies[COOKIE_NAME];
            if (token) {
                //TODO: verify token!
                jwt.verify(token, SECRET, function()
                    .then(decoded => {

                    })
                    .catch(error => {
                        //TODO: handle invalid token!
                    })
                };
                next();
            };
        }