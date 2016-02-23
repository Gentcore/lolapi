var express = require('express'),
    rest = require('unirest'),
    LoL = require('../constants/urls'),
    urlParser = require('../utils/parser');

function Summoner () {
}

Summoner.prototype.byName = function(name, fn) {
  var destination = urlParser.getUrl(LoL.summoner.byName, name);
  rest.get(destination)
  .end(fn);
};

module.exports = new Summoner();
