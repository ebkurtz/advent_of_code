const fs = require('node:fs');

const numbers = [
    ['one', '1'],
    ['two', '2'],
    ['three', '3'],
    ['four', '4'],
    ['five', '5'],
    ['six', '6'],
    ['seven', '7'],
    ['eight', '8'],
    ['nine', '9'],
    ['1','1'],
    ['2','2'],
    ['3','3'],
    ['4','4'],
    ['5','5'],
    ['6','6'],
    ['7','7'],
    ['8','8'],
    ['9','9'],
]


function parse(text) {

    let firsts = [];
    let lasts = [];

    for (let i = 0; i < numbers.length; i++){

        let searchString = numbers[i][0];
        let first = text.indexOf(searchString);
        let last = text.lastIndexOf(searchString);

        if (first == -1){
            first = Infinity;
        }
        if (last == -1){
            last = -Infinity
        }
        firsts.push(first);
        lasts.push(last);
    }

    let first = Math.min(...firsts);
    let last = Math.max(...lasts);

    first_index = firsts.indexOf(first);
    last_index = lasts.indexOf(last);

    let tensPlace = numbers[first_index][1];
    let onesPlace = numbers[last_index][1];

    return Number(tensPlace + onesPlace)
}


const data = fs.readFileSync('input.txt', 'utf8').split(/\n/g);

var toAdd = data.map(parse);

total = toAdd.reduce((cumm, curr) => cumm + curr, 0);

console.log(total);