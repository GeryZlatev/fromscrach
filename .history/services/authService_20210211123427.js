const User = require('../models/User');
const bcrypt = require('bcrypt');
const config = require('../config/config')
const register = async({ username, password }) => {
    try {
        let salt = await bcrypt.genSalt(saltRounds);
        let hash = bcrypt.hash(password, salt);
        const user = new User({ username, password: hash });
    } catch (error) {

    };




}

module.exports = {
    register,
}