const { model } = require('mongoose');
const Accessory = require('../models/Accessory');

function getAll() {
    return Accessory.find()
}

function createAccessory(data) {
    let accessory = new Accessory(data);

    return accessory.save()
}

module.exports = {
    createAccessory,
}