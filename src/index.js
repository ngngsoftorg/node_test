console.log(process.cpuUsage());
console.log(process.cpuUsage());
console.log(process.cpuUsage());
console.log(process.cpuUsage());

/*
import fs from "fs";
var data = '';

class Reader {

    static read(writerStream) {
        // Create a readable stream
        var readerStream = fs.createReadStream('input.txt');
        // Set the encoding to be utf8. 
        readerStream.setEncoding('UTF8');
        // Handle stream events --> data, end, and error
        readerStream.on('data', function(chunk) {
            // Write the data to stream with encoding to be utf8   
            writerStream.write(chunk,'UTF8');
        });

        readerStream.on('end',function(){
            // Mark the end of file
            writerStream.end();
        });

        readerStream.on('error', function(err){
            console.log(err.stack);
         });

         return;
    }
}

class Writer {

    static getWriteStream() {
        // Create a writable stream
        var writerStream = fs.createWriteStream('output.txt');

        // Handle stream events --> finish, and error
        writerStream.on('finish', function() {
            console.log("Write completed.");
        });

        writerStream.on('error', function(err){
            console.log(err.stack);
        });

        return writerStream;
    }
}

Reader.read(Writer.getWriteStream())

console.log("Program Ended");
*/


/*
var buf = Buffer.alloc(256);
var len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);
console.log(buf.toString());
*/


/*
var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
  console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");
*/

/*
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err){
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("Program Ended");
*/


/*
// Import events module
var events = require('events');


// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");*/
