// HTTP COLLECT
// Exercise 8 of 13
// Approach 1)

/* Requirements
 * Write a program that performs an HTTP GET request to a URL 
 * URL is provided to you as the first command-line argument. 
 * Collect all data from the server (not just the first "data" event) 
 * write two lines to the console (stdout).
 * The first line you write should just be an integer representing the number of characters received from the server
 * the second line should contain the complete String of characters sent by the server.
 * 
 * Approach 1) Collect data across multiple "data" events
 * append the results together prior to printing the output. 
 * Use the "end" event to determine when the stream is finished and you can write the output.
 */

var http = require('http'); 
var url = process.argv[2];
var req = http.get(url, callback);

req.on('error', function(err) {
  console.log('problem with request: ' + err.message);
});

function callback (response) {
	var allData = '';
	response.setEncoding('utf8');

	response.on("data", function (data) { 
		//console.log(data);
		allData += data;
	});

	response.on("error", function (err) { 
		console.error("problem with response: " + err.message); 
	});

	response.on("end", function () { 
		//console.log("all done here");
		console.log(allData.length);
		console.log(allData);
	});
}
