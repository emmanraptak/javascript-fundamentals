const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });

function total(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}

rl.on("line", (line) => {
    const nums = line.trim() === '' ? [] : line.split(' ').map(Number);
    console.log(total(...nums));
    rl.close();
});
rl.on("close", () => process.exit(0));
