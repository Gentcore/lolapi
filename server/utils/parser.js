var apiKey = require('../constants/apiKey');

exports.getUrl = function(host, param) {
  var url = host;
      url += param;
      url += apiKey.queryParam();
  return url;
};
