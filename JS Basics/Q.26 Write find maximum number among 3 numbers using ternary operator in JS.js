function findMax(a, b, c) {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}

console.log(findMax(5, 8, 3)); // Output: 8
