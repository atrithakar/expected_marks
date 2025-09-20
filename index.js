function expect(total_marks, required_percentage, attempted_marks, percentage_accuracy) {
    let required_marks = (required_percentage / 100) * total_marks;
    let expected_marks = attempted_marks * (percentage_accuracy / 100);
    return {"expected_marks": expected_marks, "is_pass": expected_marks >= required_marks};
}

module.exports = expect;