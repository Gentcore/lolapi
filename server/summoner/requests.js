var express = require('express'),
    rest = require('unirest'),
    LoL = require('../constants/urls'),
    utils = require('../utils/parser');

function Summoner () {
}

Summoner.prototype.byName = function(name, res) {
  var destination = utils.getUrl(LoL.summoner.byName, name);
  rest.get(destination)
  .end(function (response) {
    res.send(response.body);
  });
};

module.exports = Summoner;
