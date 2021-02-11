const User = require('../models/User');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const register = async({ username, password }) => {

    // console.log(config.development.SALT_ROUNDS)
    let salt = await bcrypt.genSalt(config.development.SALT_ROUNDS);
    let hash = bcrypt.hash(password, salt);
    const user = new User({ username, password: hash });


}

module.exports = {
    register,
}