var express = require('express'),
    router = express.Router(),
    rest = require('unirest'),
    LoL = require('../constants/urls'),
    Summoner = require('../summoner/requests');

router.get('/:name', function(req, res, next) {
  var summoner = new Summoner();
  summoner.byName(req.params.name, res);
});

module.exports = router;
