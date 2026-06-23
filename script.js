const ageInput = document.getElementById("userAge");
const calculateBtn = document.getElementById("calculateTheTime");
const resultText = document.getElementById("resultText");
const resultScreen = document.getElementById("results");
const hoursInput = document.getElementById("userHours");

calculateBtn.addEventListener("click", function() {
    let age = 0;
    let hours = 0;
    let result = 0;
    let lifeHours = 0;
    hours = Number(document.getElementById("userHours").value); // it converts strings to numbers just in case the user writes other stuff
    age = Number(document.getElementById("userAge").value);
    lifeHours = hours * 365 * (80 - age);
    let lifeDays = lifeHours / 24;
    let lifeYears = lifeDays / 365;
    lifeDays = Math.round(lifeDays);
    resultScreen.style.display = "block";
    resultText.textContent = "You will spend " + lifeDays + " days on this before you potentially die.";




});