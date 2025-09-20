const expect = require('./index');


const results = expect(
    100, // Total obtainable marks in the examination
    35,  // Required percentage to pass
    67,  // The questions attempted whose marks combined is this
    78,  // The estimated accuracy of a student in percentage
)

const x = "Expected Marks: " + results.expected_marks + "\nIs Pass: " + results.is_pass;
console.log(x);