const nums = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);
// Pipeline: keep evens → square them → sum.
const result = nums
    .filter(n => n % 2 === 0)
    .map(n => n * n)
    .reduce((acc, n) => acc + n, 0);
console.log(result);
