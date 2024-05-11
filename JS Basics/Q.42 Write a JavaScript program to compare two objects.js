function compareObjects(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };
const obj3 = { name: "Jane", age: 25 };

console.log(compareObjects(obj1, obj2)); // Output: true
console.log(compareObjects(obj1, obj3)); // Output: false
