if (typeof '10' === typeof 10) {
    console.log("They are exactly equal.");
} else {
    console.log("They are not exactly equal.");
    var converted = parseInt('10');
    console.log("After conversion, '10' is equal to", converted);
}
