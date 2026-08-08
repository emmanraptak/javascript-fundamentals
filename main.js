const nums = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);
var max = Math.max(...nums);
console.log(max);