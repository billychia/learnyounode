var env = process.argv.slice(2),
    sum = 0,
    x = 0;
env.forEach(function (x) {
    sum += Number(x);
}, x);
console.log(sum);

