const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const SALT_ROUNDS = config.development.SALT_ROUNDS;
const SECRET = config.development.SECRET;
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

    if (!isMached) {
        throw { message: 'The password is not correct!' };
    }

    //TODO: generate token;

    let token = jwt.sign({ _id: user._id }, SECRET);
    return token;


}

module.exports = {
    register,
    login
}