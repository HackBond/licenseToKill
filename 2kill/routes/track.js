var express = require('express');
var app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.query.t);
    res.render('track', { title: 'track' , tno: req.query.t});
});




module.exports = router;
