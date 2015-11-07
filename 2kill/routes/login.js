

var express = require('express');
var router = express.Router();
//var passport = require('passport');

router.get('/', function(req, res, next) {
  res.render('login', { error: '' });
});

router.post('/',function(req, res, next) {
  console.log(req.param('username'));
  if (req.param('username')=="" || req.param('password' == "")) {
    res.render('login', { error: 'Fields can\'t be empty' });
  } {
    res.redirect('/welcome?name=JamesBond');
  }

});


module.exports = router;
