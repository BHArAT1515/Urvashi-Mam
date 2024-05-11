function cloneArray(array) {
    return array.slice(0);
}

const originalArray = [1, 2, 3];
const clonedArray = cloneArray(originalArray);
console.log("Original Array:", originalArray);
console.log("Cloned Array:", clonedArray);
