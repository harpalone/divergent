var path = require('path');
var express = require('express');
var router = express.Router();
var client = require(path.join(__dirname,  '../', 'models/', 'database.js'));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
  client.connect();
  var query = client.query("SELECT name, address FROM users ORDER BY id ASC");
  var results = [];
  query.on('row', function(row) {
    results.push(row);
  });

  // After all data is returned, close connection and return results
  query.on('end', function() {
      client.end();
      return res.json(results);
  });

  // res.send('respond with a resource');
});

module.exports = router;
