var express = require('express');
var app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('decrypt', { title: 'Decrypt password' });
});




module.exports = router;
