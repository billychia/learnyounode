//console.log(process.argv)
var temp = process.argv,
    sum = 0,
    x = 0;
temp.shift();
temp.shift();
//console.log(temp);
temp.forEach(function (x) {
    sum += Number(x);
}, x);
console.log(sum);
