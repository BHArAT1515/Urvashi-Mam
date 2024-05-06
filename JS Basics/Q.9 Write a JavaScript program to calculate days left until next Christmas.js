var today = new Date();
var nextChristmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
    nextChristmas.setFullYear(nextChristmas.getFullYear() + 1);
}
var daysLeft = Math.ceil((nextChristmas.getTime() - today.getTime()) / (1000 * 3600 * 24));
console.log("Days left until next Christmas:", daysLeft);
