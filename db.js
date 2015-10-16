var mongoose = require('mongoose');

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds039674.mongolab.com:39674/flights');

module.exports = mongoose.connection;