function isVowel(character) {
    return ['a', 'e', 'i', 'o', 'u'].includes(character.toLowerCase());
}

console.log(isVowel('a')); // Output: true
console.log(isVowel('b')); // Output: false
