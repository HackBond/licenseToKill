var express = require('express');
var app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.a );
  if (req.query.a == 1)
    res.render('hq', { title: 'Face Recognition', boo:false , boo2: false});
  else if (req.query.a == 2) {
    res.render('hq', { title: 'Face Recognition', boo:true , boo2: false});
  } else {
    res.render('hq', { title: 'Face Recognition', boo:true , boo2: true});
  }
});




module.exports = router;
