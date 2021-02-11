const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const register = async({ username, password }) => {
    let salt = await bcrypt.genSalt(saltRounds);
    let hash = bcrypt.hash(password, salt);
    const user = new User(userData);



}

module.exports = {
    register,
}