//  HTTP FILE SERVER
//  Exercise 11 of 13

/* Requirements
 * Write an HTTP server
 * serve the same text file for each request it receives
 * server should listen on the port provided by the first argument to your program.
 * location of the file to serve as the second command-line argument. 
  * You must use the fs.createReadStream() method to stream the file contents to the response.
 */ 

var http = require('http');
var fs = require('fs');
var portNumber = Number(process.argv[2]);
var file = process.argv[3];

var server = http.createServer(function (request, response) {
	var src = fs.createReadStream(file);
	var dst = response;
	src.pipe(dst);
})

server.listen(portNumber);
