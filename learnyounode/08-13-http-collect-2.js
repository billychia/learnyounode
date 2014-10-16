// HTTP COLLECT
// Exercise 8 of 13
// Approach 2)

/* Requirements
 * Write a program that performs an HTTP GET request to a URL 
 * URL is provided to you as the first command-line argument. 
 * Collect all data from the server (not just the first "data" event) 
 * write two lines to the console (stdout).
 * The first line you write should just be an integer representing the number of characters received from the server
 * the second line should contain the complete String of characters sent by the server.
 *
 * Approach 2) Use a third-party package to abstract the difficulties involved in collecting an entire stream of data.
 * bl (Buffer List) provides a useful API for solving this problem
 */

var http = require('http');
var bl = require('bl');
var url = process.argv[2];
var req = http.get(url, callback);

req.on('error', function(err) {
  console.error('problem with request: ' + err.message);
});

function callback (response) {
	response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
		data = data.toString()
		console.log(data.length);
		console.log(data);
	}))

	response.on("error", function (err) { 
		console.error("problem with response: " + err.message); 
	});
}