// JUGGLING ASYNC
// Exercise 9 of 13

/* Requirements
 * Use http.get()
 * You will be provided with three URLs as the first three command-line arguments
 * Collect the complete content provided to you by each of the URLs
 * Print it to the console (stdout). 
 * You don't need to print out the length, just the data as a String; one line per URL. 
 * Print them out in the same order as the URLs are provided to you as command-line arguments.
 * queue the results
 * keep track of how many of the URLs have returned their entire contents
 * once you have them all, you can print the data to the console.
 */ 

var http = require('http');
var bl = require('bl');
var URLs = process.argv.slice(2);
var queuedResults = [];

URLs.forEach(function (url) {
	var position = URLs.indexOf(url);

	var req = http.get(url, function (response) {
		getStream(response, position);
	});
	
	req.on('error', function(err) {
	  console.error('problem with request: ' + err.message);
	});
})

function getStream (response, position) {
	response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
    	queuedResults.splice(position, 0, data.toString());

    	if (queuedResults.length == URLs.length) {
			queuedResults.forEach( function (element) {
				console.log(element);
			});
		}
	}));

	response.on("error", function (err) { 
		console.error("problem with response: " + err.message); 
	});
}