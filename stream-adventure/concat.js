var concat = require('concat-stream');

var reverse = concat(function(data) {
  // data is all of readme.md as a Buffer
  process.stdout.write(data.toString().split("").reverse().join("") + '\n');
})

process.stdin
    .pipe(reverse);
