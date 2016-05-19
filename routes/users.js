var path = require('path');
var pg = require('pg');
pg.defaults.ssl = true;
var express = require('express');
var router = express.Router();
var connectionString = require(path.join(__dirname,  '../', 'config'));
var validator = require('validator');
/* GET users listing. */
router.get('', function(req, res, next) {
  var results = [];
  var client = new pg.Client(connectionString);
  client.connect();
  var query = client.query("SELECT name, address FROM users ORDER BY id ASC");
  query.on('row', function(row) {
    results.push(row);
  })
  query.on('end', function() {
    client.end()
    res.json(results);
  })
});

router.get('/new', function(req, res, next) {
  res.render('users/new', { title: 'Registration' });
});

router.post('/create', function(req, res, next) {
  console.log(req.body);
  var error = [];
  var email = req.body.email;
  console.log(email);
  var results = [];

  // Return if invalid email
  if(!validator.isEmail(email)){
    res.json({status: 'error', message: 'Invalid email'})
  }

  // Check if user already exist
  var client = new pg.Client(connectionString);
  client.connect();
  var query = client.query("SELECT * from users WHERE email = 'harpal@yopmail.com'");
  query.on('row', function(row) {
    results.push(row);
  })
  query.on('end', function() {
    client.end();
    if(results.length){
      res.json({status: 'error', message: 'email already exist'});
    }
    else{
      res.json({ status: 'success', message: 'User created'})
    }
  })

});

module.exports = router;
