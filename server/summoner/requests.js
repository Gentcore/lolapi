var rest = require('unirest'),
    LoL = require('../constants/urls'),
    urlParser = require('../utils/parser'),
    NodeCache = require('node-cache'),
    util= require('util'),
    EventEmitter = require('events').EventEmitter,
    eventBus = require('../utils/EventBus'),
    Cache = require('../cache/summoner');

util.inherits(Summoner, EventEmitter);

function Summoner () {
  EventEmitter.call(this);
}

Summoner.prototype.byName = function(name, fn) {
  var cacheResult = Cache.getSummoner(name),
      destination = urlParser.getUrl(LoL.summoner.byName, name);
  if(cacheResult !== undefined) fn(cacheResult);
  if(cacheResult === undefined) newRequest(destination, fn);
};

newRequest = function(destination, responseCallback) {
  rest.get(destination)
  .end(function(response) {
    responseCallback(response.body);
    eventBus.newSummoner(response);
  });
};

module.exports = Summoner;
