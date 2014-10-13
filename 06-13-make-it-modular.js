// MAKE IT MODULAR
// Exercise 6 of 13

/* Requirements 
 * Create a program that prints a list of files in a given directory, 
 * filtered by the extension of the files. 
 * The first argument is the directory name and the second argument is the extension filter. 
 * Print the list of files (one file per line) to the console. 
 * You must use asynchronous I/O.
 */

var mymodule = require('./mymodule.js')
var dir = process.argv[2]; // directory name
var ext = process.argv[3]; // extension filter 

mymodule(dir, ext, callback);

function callback (err, data) {
	if (err)
		return console.error("Error:", err);

	data.forEach(function (file) {
        console.log(file);
    });
}

