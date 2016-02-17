exports.queryParam = function() {
  return '?api_key=' + this.value();
};

exports.value = function() {
  return process.env.LOL_API_KEY;
};
