function getFileExtension(filename) {
    return filename.split('.').pop();
}

console.log("Extension of 'example.jpg':", getFileExtension('example.jpg'));
