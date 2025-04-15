const EventEmitter = require('events');


const eventEmitter = new EventEmitter();


function greetCallback() {
    console.log("Hello! The 'greet' event was triggered.");
}


function goodbyeCallback() {
    console.log("Goodbye! The 'goodbye' event was triggered.");
}


eventEmitter.on('greet', greetCallback);


eventEmitter.on('goodbye', goodbyeCallback);


function mainLoop() {
    console.log("Main loop running...");

    
    setTimeout(() => {
        console.log("Emitting 'greet' event...");
        eventEmitter.emit('greet'); 
    }, 1000); 

    setTimeout(() => {
        console.log("Emitting 'goodbye' event...");
        eventEmitter.emit('goodbye');  
    }, 3000); 
}
mainLoop();
