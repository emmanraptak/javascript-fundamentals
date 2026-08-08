const words = require('fs').readFileSync(0, 'utf-8').trim().split(' ');
const seen = {};
for (word of words) {
    seen[word] = true;
}
console.log(Object.keys(seen).length);