function mul(a) {
  return function(b) {
    return a * b;
  };
}

console.log(mul(2)(3)); // Output: 6
