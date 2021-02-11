const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const register = async({ username, password }) => {
    let salt = await bcrypt.genSalt(saltRounds);

    const user = new User(userData);



}

module.exports = {
    register,
}