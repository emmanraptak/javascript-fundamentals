const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const number = Number(lines[0]);
var count = 0;
for (let i = 1; i <= number; i++) {
    count += i;
}
console.log(count);