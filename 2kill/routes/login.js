

var express = require('express');
var router = express.Router();
//var passport = require('passport');

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/',function(req, res, next) {

});


module.exports = router;
