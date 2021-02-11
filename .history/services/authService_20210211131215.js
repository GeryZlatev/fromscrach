const User = require('../models/User');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/config');
const register = async({ username, password }) => {
    //TODO: Check if username exists!
    // console.log(config.development.SALT_ROUNDS)
    let salt = await bcrypt.genSalt(SALT_ROUNDS);
    let hash = await bcrypt.hash(password, salt);

    const user = new User({ username, password: hash });

    return await user.save();
}

const login = async({ username, password }) => {
    //TODO: get user frob db;
    User.find({}).where('username').eq(username);
    User.find({ username });

    //TODO: compare password hash;

    //TODO: generate token;
}

module.exports = {
    register,
    login
}