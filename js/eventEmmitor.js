const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on('event', () => {
  console.log('Event received!');
});

emitter.emit('event');
