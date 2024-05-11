function arrayToCSV(data) {
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(obj => Object.values(obj).join(','));
    return headers + '\n' + rows.join('\n');
}

const data = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Tom', age: 35, city: 'Chicago' }
];

console.log(arrayToCSV(data));
