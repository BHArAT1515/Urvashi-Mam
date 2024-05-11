function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toDateString();
}

console.log("Current Date:", getCurrentDate());
