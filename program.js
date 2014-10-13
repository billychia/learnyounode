//  HTTP FILE SERVER
//  Exercise 11 of 13

/* Requirements
 * Write an HTTP server
 * serve the same text file for each request it receives
 * server should listen on the port provided by the first argument to your program.
 * location of the file to serve as the second command-line argument. You must use the fs.createReadStream() method to stream the file contents to the response.
 */ 

var net = require('net');
var strftime = require('strftime');
var portNumber = process.argv[2];

var server = net.createServer(function (socket) {
	data = strftime('%F %H:%M') + '\n';
	socket.end(data);
})

server.listen(portNumber);
