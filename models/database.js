var pg = require('pg');
pg.defaults.ssl = true;
var path = require('path');
var connectionString = require(path.join(__dirname,  '../', 'config'));
client = new pg.Client(connectionString);
module.exports = client;
