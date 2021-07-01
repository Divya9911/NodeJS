const mongoose = require('mongoose');
const dbConfig = require('./config')

const createMongoConnection = () => {
    mongoose.connect(dbConfig);
};

const getMongoConnection = () => {
    return mongoose.connection;
};

module.exports = { createMongoConnection, getMongoConnection };