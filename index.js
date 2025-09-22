function expect(total_marks, required_percentage, attempted_marks, percentage_accuracy) {
    let required_marks = (required_percentage / 100) * total_marks;

    if(attempted_marks > total_marks) {
        throw new Error("Attempted marks cannot be greater than total marks");
    }

    if(percentage_accuracy < 0 || percentage_accuracy > 100) {
        throw new Error("Percentage accuracy must be between 0 and 100");
    }

    if(required_percentage < 0 || required_percentage > 100) {
        throw new Error("Required percentage must be between 0 and 100");
    }

    let expected_marks = attempted_marks * (percentage_accuracy / 100);
    return {"expected_marks": expected_marks, "is_pass": expected_marks >= required_marks};
}

module.exports = expect;