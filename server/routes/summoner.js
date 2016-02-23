var express = require('express'),
    router = express.Router(),
    rest = require('unirest'),
    SummonerAPI = require('../summoner/requests');

router.get('/:name', function(req, res, next) {
  SummonerAPI.byName(req.params.name, function(response) {
    res.send(response.body);
  });
});

module.exports = router;
