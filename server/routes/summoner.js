var express = require('express'),
    router = express.Router(),
    rest = require('unirest');

getUrl = function(name) {
  var url = 'https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/';
      url += name;
      url += '?api_key=' + process.env.LOL_API_KEY;
  return url;
};

router.get('/:name', function(req, res, next) {
  rest.get(getUrl("gentcore"))
  .header('Accept', 'application/json')
  .end(function (response) {
    res.send(response.body);
  });
});

module.exports = router;
