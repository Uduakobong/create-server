const {EventEmitter} = require('events');

const myEmitter = new EventEmitter()

myEmitter.on('hello', () => {
    console.log('this event was called');
});

myEmitter.emit('hello');