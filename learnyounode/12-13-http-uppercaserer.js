// HTTP UPPERCASERER
// Exercise 12 of 13

/* Requirements
 * Write an HTTP server that receives only POST requests
 * Convert incoming POST body characters to upper-case
 * Returns it to the client.
 * Your server should listen on the port provided by the first argument to your program.
 */ 

var http = require('http');
var fs = require('fs');
var map = require('through2-map')
var portNumber = Number(process.argv[2]);

var server = http.createServer(function (request, response) {
	var inStream = request;
	var outStream = response;
	inStream.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase()
    })).pipe(outStream);
})

server.listen(portNumber);
