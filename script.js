const ageInput = document.getElementById("userAge");
const calculateBtn = document.getElementById("calculateTheTime");
const resultText = document.getElementById("resultText");
const resultScreen = document.getElementById("results");
const hoursInput = document.getElementById("userHours");
const factText = document.getElementById("factText");
// i create a arrray of objects so i can calculate how many times the user could habe done these things
const comparisons = [
    { label: "learn guitar", hours: 250 },
    { label: "learn a new language", hours: 600 },
    { label: "walk the Appalachian Trail", hours: 1700 },
    { label: "watch all of Breaking Bad", hours: 62 },
    { label: "build a PC from scratch", hours: 10 },
    { label: "Watch all of attack on titan ", hours: 37 },
    { label: "get a six pack (gym)", hours: 250 },
    { label: "learn to skateboard", hours: 100 },
    { label: "learn piano", hours: 300 },
    { label: "learn to cook properly", hours: 120 },
    { label: "learn to solve a Rubik's cube", hours: 8 },
    { label: "read War and Peace ( goated book ) ", hours: 60 },
    { label: "learn to type at 100wpm", hours: 50 },
    { label: "watch all of One Piece", hours: 1000 },
    { label: "build a functioning robot", hours: 200 },
    { label: "watch all of Bleach", hours: 190 },
    { label: "complete Elden Ring fully", hours: 130 },
    { label: "watch all of Death Note", hours: 10 },
]   

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
    let factString = "";
    for(let i = 0; i < comparisons.length; i++){
        let times = Math.round(lifeHours / comparisons[i].hours);
            if(times >= 1){
                factString = factString + "you could have: " + comparisons[i].label + " " + times + " times\n";
    }
}
factText.textContent = factString;

});