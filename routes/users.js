var path = require('path');
var pg = require('pg');
pg.defaults.ssl = true;
var express = require('express');
var router = express.Router();
var connectionString = require(path.join(__dirname,  '../', 'config'));
/* GET users listing. */
router.get('', function(req, res, next) {
  var results = [];
  pg.connect(connectionString, function(err, client) {
  if (err) throw err;
  client
    .query("SELECT name, address FROM users ORDER BY id ASC")
    .on('row', function(row) {
      results.push(row);
    })
    .on('end', function() {
      return res.json(results);
    })
  })
});

router.get('/new', function(req, res, next) {
  res.render('users/new', { title: 'Registration' });
});

router.post('', function(req, res, next) {
  var email = req.params.email;
  var results = [];
  pg.connect(connectionString, function(err, client) {
  if(err) throw err;
  client
    .query("SELECT * from users where email = ?", email)
    .on('row', function(row) {
      results.push(row)
    })
    .on('end', function(){
      return res.json(results);
    })
  })
  // res.redirect("/");
});

module.exports = router;
