var express = require('express'),
    router = express.Router(),
    http = require('https'),
    rest = require('unirest');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
