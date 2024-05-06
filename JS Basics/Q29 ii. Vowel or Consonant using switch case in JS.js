function checkLetterType(letter) {
    switch (letter.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return "Vowel";
        default:
            return "Consonant";
    }
}

console.log(checkLetterType('a')); // Output: Vowel
console.log(checkLetterType('b')); // Output: Consonant
