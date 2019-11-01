// This test.js file is used to test my ideas before I 
// place the code to a chapter_i file as my final solution
// Sometimes it is empty
// Sometimes it contains code that may not work
// For code that do work, please refer to chapter_i file, 
// where i points to the corresponding chapter number

// Numbers again
// Fill in this regular expression.
let number = /^([-+]?\d+)$|^([+-]?\.\d+)$|^([-+]?\d+\.((\de)?\d+)?)$|^(\d(e|E)[-+]\d+)$/;

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                 "1.3e2", "1E-4", "1e+12"]) {
    if (!number.test(str)) {
        console.log(`Failed to match '${str}'`);
    }
}

for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                 ".5.", "1f5", "."]) {
    if (number.test(str)) {
        console.log(`Incorrectly accepted '${str}'`);
    }
}

// think if the regex can be shortened a bit ...