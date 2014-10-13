// HTTP CLIENT
// Exercise 7 of 13

/* Requirements
 * Write a program that performs an HTTP GET request to a URL 
 * URL is provided to you as the first command-line argument. 
 * Write the String contents of each "data" event from the response to a new line on the console (stdout).
 */ 

 var http = require('http'); 
 var url = process.argv[2];
 var req = http.get(url, callback);

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

function callback (response) {
	response.setEncoding('utf8');

	response.on("data", function (data) { 
		console.log(data);
	});

	response.on("error", function (err) { 
		console.error("problem with response: " + e.message); 
	});

}
