var express = require('express'),
    router = express.Router(),
    rest = require('unirest'),
    SummonerAPI = require('../summoner/requests'),
    getSummoner = new SummonerAPI();

router.get('/:name', function(req, res, next) {
  getSummoner.byName(req.params.name, function(response) {
    res.send(response);
  });
});

module.exports = router;
