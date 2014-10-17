var split = require('split');
var through = require('through');
var tr = through(write, end);
var toggle = 1;

function write (buf) {
	var line = buf.toString();
	if (toggle) {
		this.queue(line.toLowerCase() + '\n');
		toggle = 0;
	} else {
		this.queue(line.toUpperCase() + '\n');
		toggle = 1;
	}
	
}

function end () {
	this.queue(null);
}

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);
