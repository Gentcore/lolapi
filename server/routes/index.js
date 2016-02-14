var express = require('express'),
    router = express.Router(),
    http = require('https');

getUrl = function(name) {
  return 'https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/' + name +'?api_key=' + process.env.LOL_API_KEY;
};

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/summoner/:name', function(req, res, next) {
  http.get(getUrl(req.params.name), (res) => {
    res.on('data', (d) => {
      process.stdout.write(d);
    });

  }).on('error', (e) => {
    console.error(e);
  });
  // http.request(getRequest(req.params.name), function(res) {
  //   console.log('STATUS: ' + res.statusCode);
  //   console.log('HEADERS: ' + JSON.stringify(res.headers));
  //   res.setEncoding('utf8');
  //   res.on('data', function (chunk) {
  //     console.log('BODY: ' + chunk);
  //   });
  // }).end();
  res.end();
});

module.exports = router;
