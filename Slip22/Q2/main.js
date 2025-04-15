const EventEmitter = require('events'); 


const eventEmitter = new EventEmitter();


function onLogin() {
  console.log('User logged in!');
}

function onLogout() {
  console.log('User logged out!');
}

function onError() {
  console.log('An error occurred!');
}


eventEmitter.on('login', onLogin);
eventEmitter.on('logout', onLogout);
eventEmitter.on('error', onError);


setTimeout(() => {
  console.log('Emitting login event...');
  eventEmitter.emit('login'); 
}, 1000);

setTimeout(() => {
  console.log('Emitting logout event...');
  eventEmitter.emit('logout'); 
}, 3000);

setTimeout(() => {
  console.log('Emitting error event...');
  eventEmitter.emit('error'); 
}, 5000);
