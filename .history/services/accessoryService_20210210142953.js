const { model } = require('mongoose');
const Accessory = require('../models/Accessory');

function getAll() {
    return Accessory.find({}).lean();
}

function getAllWithout(ids) {
    return Accessory.find({ _id: { $nin: ids } })
}

function createAccessory(data) {
    let accessory = new Accessory(data);

    return accessory.save()
}

module.exports = {
    createAccessory,
    getAll,
    getAllWithout
}