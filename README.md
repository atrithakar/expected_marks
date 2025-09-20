# What is Expected-Marks?

**Expected-Marks** is an npm package that helps students estimate how many marks will they get in a particular examination and whether they will pass or not.

# How to use **Expected-Marks**?

```
npm i expected-marks
```

```
const expect = require('expected-marks');

const results = expect(
    100, // Total obtainable marks in the examination
    35,  // Required percentage to pass
    67,  // The questions attempted whose marks combined is this
    78,  // The estimated accuracy of a student in percentage
)

const x = "Expected Marks: " + results.expected_marks + "\nIs Pass: " + results.is_pass;
console.log(x);
```