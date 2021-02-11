const User = require('../models/User');
const bcrypt = require('bcrypt');
const register = async(userData) => {

    const user = new User(userData);



}

module.exports = {
    register,
}