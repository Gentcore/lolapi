var util= require("util"),
    EventEmitter = require("events").EventEmitter;

util.inherits(EventBus, EventEmitter);

function EventBus () {
  EventEmitter.call(this);
}

EventBus.prototype.newSummoner = function(response) {
  if(response.status != 200) return;
  this.emit('NewSummoner', response.body);
};

module.exports = new EventBus();
