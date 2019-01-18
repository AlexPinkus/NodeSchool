const numbers = process.argv.slice(2);
const minimum = Math.min(...numbers);
console.log(`The minimum of [${numbers}] is ${minimum}`);