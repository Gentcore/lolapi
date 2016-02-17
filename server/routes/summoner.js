var express = require('express'),
    router = express.Router(),
    rest = require('unirest'),
    LoL = require('../constants/urls'),
    endpoints = require('../utils/parser');

router.get('/:name', function(req, res, next) {
  var destination = endpoints.getUrl(LoL.summoner.byName, req.params.name);
  rest.get(destination)
  .end(function (response) {
    res.send(response.body);
  });
});

module.exports = router;
