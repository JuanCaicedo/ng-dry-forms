var express = require('express');
var router = express.Router();

var item = require('./item');
router.use('/item', item);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'angular-dry-forms' });
});

module.exports = router;
