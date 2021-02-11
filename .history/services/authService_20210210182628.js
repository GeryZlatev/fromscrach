const User = require('../models/User');

const register = async(userData) => {

    if (userData.password !== userData.repeatPassword) {
        throw { message: 'Passwords missmatch!' }
    }
    const user = new User(userData);



}