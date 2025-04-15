const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


function onEventTriggered() {
    console.log("Event has been triggered!");
}


eventEmitter.on('triggerEvent', onEventTriggered);


let count = 0;
setInterval(() => {
  
    if (count < 5) {
        console.log(`Triggering event #${count + 1}`);
        eventEmitter.emit('triggerEvent');
        count++;
    } else {
        console.log('Event loop stopped');
        process.exit();
    }
}, 2000); // Trigger every 2 seconds
