function getCurrentDateTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentTime = new Date();
    const dayOfWeek = daysOfWeek[currentTime.getDay()];
    let hour = currentTime.getHours();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; // Handle midnight (0 hours)
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    return `Today is ${dayOfWeek}. Current Time is ${hour} ${ampm}: ${minutes} : ${seconds}`;
}

console.log(getCurrentDateTime());
