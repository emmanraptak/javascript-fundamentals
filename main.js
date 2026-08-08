function square(n){
    return n * n;
}

const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const number = Number(lines[0]);
console.log(square(number));