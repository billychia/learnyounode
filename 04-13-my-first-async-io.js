var fs = require('fs');
fs.readFile(process.argv[2], cb);

function cb (err, data) {
    if (!err) {
        var str = data.toString().split('\n').length - 1;
        console.log(str);
    } else {
        console.log('error: ', err);
    }
}; 
