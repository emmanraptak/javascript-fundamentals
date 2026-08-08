const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const number = Number(lines[0]);

if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
} else if (number % 3 === 0) {
    console.log("Fizz");
} else if (number % 5 === 0 ) {
    console.log("Buzz");
} else {
    console.log(number);
}
