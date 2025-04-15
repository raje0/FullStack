const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('start', () => {
    console.log('Event "start" detected!');
});

myEmitter.on('end', () => {
    console.log('Event "end" detected!');
});

myEmitter.on('process', () => {
    console.log('Event "process" detected!');
});

setInterval(() => {
    const events = ['start', 'process', 'end'];
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    console.log(`Triggering event: ${randomEvent}`);
    myEmitter.emit(randomEvent);
}, 2000);
