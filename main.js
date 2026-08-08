const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const name = lines[0];
const age = lines[1];
console.log(`Hi, ${name}! You are ${age} years old.`);
