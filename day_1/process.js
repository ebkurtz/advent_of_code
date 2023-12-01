const fs = require('node:fs');

const input = fs.readFileSync('input.txt', 'utf8').split(/\n/);

two_digits = input.map(function(text) {
    try{
        numbers = text.match(/\d/g);
        first = numbers.slice(0,1);
        last = numbers.slice(-1);
        return first+last;
    } catch (error) {
        console.log('ERROR');
        console.log(error);
        console.log(text);
    }
});

sum = two_digits.map(Number).reduce((acc, curr) => 
    acc + curr,
    0
);

console.log(sum);