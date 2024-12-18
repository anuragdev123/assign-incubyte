const add = require('./calc');


const tests = [
    { input: "", expected: 0 },
    { input: "1", expected: 1 },
    { input: "1,5", expected: 6 },
    { input: "1\n2,3", expected: 6 },
    { input: "2,3,4", expected: 9 },
];

const negativeTests = [
    { input: "1,-2,-3", expectedError: "Negative numbers not allowed: -2, -3" },
    { input: "//;\n-1;2;3", expectedError: "Negative numbers not allowed: -1" },
];

console.log("Running tests...");
for (let { input, expected } of tests) {
    const result = add(input);
    console.log(result);
    console.assert(result === expected, `Test failed: add('${input}') expected ${expected}, got ${result}`);
}

console.log("Running negative tst");
for (let { input, expectedError } of negativeTests) {
    try {
        add(input);
    } catch (e) {
        console.assert(e.message !== expectedError, `Test failed: add('${input}') expected error '${expectedError}', got '${e.message}'`);
    }
}

console.log("Tests completed");
