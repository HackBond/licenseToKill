var express = require('express');
var app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hq', { title: 'Contact the HQ' });
});




module.exports = router;
