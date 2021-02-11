const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const register = async({ username, password }) => {
    bcrypt.genSalt(saltRounds, (err, hash) => {

    })
    const user = new User(userData);



}

module.exports = {
    register,
}