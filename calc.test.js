const add = require('./calc');


const tests = [
    { input: "", expected: 0 },
    { input: "1", expected: 1 },
    { input: "1,5", expected: 6 },
    { input: "1\n2,3", expected: 6 },
    { input: "2,3,4", expected: 9 },
];

console.log("Running tests...");
for (let { input, expected } of tests) {
    const result = add(input);
    console.log(result);
    console.assert(result === expected, `Test failed: add('${input}') expected ${expected}, got ${result}`);
}
