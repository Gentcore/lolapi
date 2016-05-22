var util= require("util"),
    EventEmitter = require("events").EventEmitter;

util.inherits(EventBus, EventEmitter);

function EventBus () {
  EventEmitter.call(this);
}

EventBus.prototype.newSummoner = function(summoner) {
  this.emit('NewSummoner', summoner);
};

module.exports = new EventBus();
