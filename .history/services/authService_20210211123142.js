const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const register = async({ username, password }) => {
    try {
        let salt = await bcrypt.genSalt(saltRounds);
        let hash = bcrypt.hash(password, salt);
        const user = new User(user);
    } catch (error) {

    };




}

module.exports = {
    register,
}