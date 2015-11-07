var express = require('express');
var app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('decrypt', { title: 'Scan database', boo: false});
});

router.post('/', function(req, res, next) {
  res.render('decrypt', { title: 'Scan database', boo: true });
});


module.exports = router;
