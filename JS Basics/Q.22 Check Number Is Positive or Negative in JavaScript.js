function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(5)); // Output: Positive
console.log(checkNumber(-3)); // Output: Negative
console.log(checkNumber(0)); // Output: Zero
