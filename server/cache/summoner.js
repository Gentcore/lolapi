var NodeCache = require("node-cache"),
    util= require("util"),
    EventEmitter = require("events").EventEmitter,
    eventBus = require('../utils/EventBus');

util.inherits(Cache, EventEmitter);

function Cache () {
  EventEmitter.call(this);
  myCache = new NodeCache();
  eventBus.on('NewSummoner', newSummoner);
}

newSummoner = function(response) {
  var people = Object.keys(response);
  people.forEach(function(person) {
    var items = Object.keys(response[person]);
    myCache.set(person, response);
  });
};

Cache.prototype.getSummoner = function(summoner) {
  return myCache.get(summoner);
};

module.exports = new Cache();
