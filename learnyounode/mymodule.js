// MAKE IT MODULAR
// Exercise 6 of 13

/* contract: 
  * Export a single function that takes exactly takes three arguments
  * 3 args == the directory name, the filename extension string and a callback function
  * Call the callback exactly once with an error or some data as described.
  * Don't change anything else, like global variables or stdout.
  * Handle all the errors that may occur and pass them to the callback.
  */

var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) { 
	fs.readdir(dir, function (err, files) {
	    if (err) 
	    	return callback(err);

	    var data = [];

	    files.forEach(function (file) {
	        if (path.extname(file) === "." + ext) {
	            data.push(file);
	        }
	    })

	    callback(null, data);
	});
}






