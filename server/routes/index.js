var express = require('express'),
    router = express.Router(),
    http = require('https');

getUrl = function(name) {
  return {
    protocol: 'https:',
    host: 'euw.api.pvp.net',
    path: '/api/lol/euw/v1.4/summoner/by-name/' + name +'?api_key=' + process.env.LOL_API_KEY,
    headers: {
      'Content-Type': 'application/json'
    }
  };
};

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/summoner/:name', function(req, res, next) {
  http.get(getUrl(req.params.name), (response) => {
    var body = '';
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
        body += chunk;
      });
    }).on('end', (end) => {
      console.log("DATA:" + body);
    });
  // res.send(test);
});

module.exports = router;
