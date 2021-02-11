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
    // User.find({}).where('username').eq(username);
    let user = await User.findOne({ username });

    if (!user) {
        throw { message: 'User not found!' };
    }

    //TODO: compare password hash;

    let isMached = await bcrypt.compare(password, user.password);

    console.log(isMached);

    //TODO: generate token;
}

module.exports = {
    register,
    login
}