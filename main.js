const max = (a, b) => a >= b ? a : b;

const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const number1 = Number(lines[0]);
const number2 = Number(lines[1]);
console.log(max(number1, number2));