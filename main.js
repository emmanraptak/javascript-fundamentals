const word = require('fs').readFileSync(0, 'utf-8').trim();
const reversed_word = word.split('').reverse().join('');
console.log(reversed_word);
