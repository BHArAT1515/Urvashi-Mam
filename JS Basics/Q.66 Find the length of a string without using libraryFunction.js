function getStringLength(str) {
    let length = 0;
    for (let char of str) {
        length++;
    }
    return length;
}

const str = 'Hello, World!';
console.log("Length of the string:", getStringLength(str)); // Output: 13
