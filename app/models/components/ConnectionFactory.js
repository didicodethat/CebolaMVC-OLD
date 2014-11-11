var database, mongoose;

database = require('../../config/main').database;

mongoose = require('mongoose');

console.log("mongodb://" + database.ip + ":" + database.port + "/" + database.database);

mongoose.connect("mongodb://" + database.ip + ":" + database.port + "/" + database.database);

module.exports = mongoose;