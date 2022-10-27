var express = require('express');

var router = express.Router();

var x = Math.random();



var val1="Math.fround() applied to "+ x + " is "+ Math.fround(x)

var val2="Math.random() applied to "+ x + " is "+ Math.random(x)

var val3= "Math.round() applied to "+ x + " is "+ Math.round(x);

/* GET home page. */

router.get('/', function(req, res, next) {

  res.render('computation', { title:'VENKATARAMANA',value1: val1, value2: val2, value3: val3 });

});

module.exports = router;