function findMin(a, b, c) {
    return a < b ? (a < c ? a : c) : (b < c ? b : c);
}

console.log(findMin(5, 8, 3)); // Output: 3
