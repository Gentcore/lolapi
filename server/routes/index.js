var express = require('express'),
    router = express.Router(),
    http = require('https'),
    rest = require('unirest');

// getUrl = function(name) {
//   return {
//     protocol: 'https:',
//     host: 'euw.api.pvp.net',
//     path: '/api/lol/euw/v1.4/summoner/by-name/' + name +'?api_key=' + process.env.LOL_API_KEY,
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };
// };

// getUrl = function(name) {
//   var url = 'https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/';
//       url += name;
//       url += '?api_key=' + process.env.LOL_API_KEY;
//   return url;
// };

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/api/summoner/:name', function(req, res, next) {
//   rest.get(getUrl("gentcore"))
//   .header('Accept', 'application/json')
//   .end(function (response) {
//     res.send(response.body);
//   });
// });

module.exports = router;
