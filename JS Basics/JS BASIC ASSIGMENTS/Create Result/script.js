function performOperations() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultsDiv = document.getElementById('results');

    if (isNaN(num1) || isNaN(num2)) {
        resultsDiv.innerHTML = "Please enter valid numbers.";
        return;
    }

    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num1 / num2;

    resultsDiv.innerHTML = `
        <p>Sum: ${sum}</p>
        <p>Difference: ${difference}</p>
        <p>Product: ${product}</p>
        <p>Quotient: ${quotient}</p>
    `;
}
