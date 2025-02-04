const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();


const doEvent=()=>
    console.log("Event1 emitted sucessfully");


eventEmitter.on('emitting',doEvent)

eventEmitter.on('emitting1',()=>
    console.log("Event1 emitted sucessfully"))

eventEmitter.removeListener('emitting',doEvent)
// eventEmitter.removeAllListeners();
eventEmitter.emit('emitting')

eventEmitter.emit('emitting1')

console.log('end')