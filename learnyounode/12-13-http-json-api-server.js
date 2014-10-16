// HTTP JSON API SERVER
// Exercise 13 of 13

/* Requirements
 * Write an HTTP server
 * Serve JSON data when it receives a GET request to the path '/api/parsetime'. 
 * Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.
 * 
 * For example:
 * 
 *   /api/parsetime?iso=2013-08-10T12:10:15.474Z
 * 
 * The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:
 * 
 *     {
 *       "hour": 14,
 *       "minute": 23,
 *       "second": 15
 *     }
 * 
 * Add second endpoint for the path '/api/unixtime' 
 * which accepts the same query string but 
 * returns UNIX epoch time under the property 'unixtime'. 
 * For example:
 * 
 *     { "unixtime": 1376136615474 }
 * 
 * Your server should listen on the port provided by the first argument to your program.
 */ 

var http = require('http');
var url = require('url'); 
var portNumber = Number(process.argv[2]);

var server = http.createServer(function (req, res) {

	var path = req.url;
	var pathname = url.parse(path, true).pathname;
	var isoDate = url.parse(path, true).query.iso;
	var d = new Date(isoDate);
	
	if (pathname == '/api/parsetime') {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		var result = {
			"hour": d.getHours(),
			"minute": d.getMinutes(),
			"second": d.getSeconds()
		};
	} else if (pathname == '/api/unixtime') {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		result = { 'unixtime' : d.getTime() };
	} else {
		res.writeHead(404)
		result = { '404' : "oh snap, you got 404'd" };
	}

    res.end(JSON.stringify(result));
})

server.listen(portNumber);
