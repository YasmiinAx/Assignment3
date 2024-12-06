/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var selectedDays = 0;
var dailyRate = 0;
var calculatedCost = document.getElementById("calculated-cost");

var fullDay = document.getElementById("full");
var halfDay = document.getElementById("half");
var allDays = document.getElementsByClassName("blue-hover");
var clearButton = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function dayButtons() {
    var day = this;
    
    if (day.classList.contains('clicked')) {
        day.classList.remove('clicked');
        selectedDays--; /* decrease value of days when removing click */
    } else {
        day.classList.add('clicked');
        selectedDays++; /* increase value of days when adding click */
    }
    recalculate();
}

for (let day of allDays) {
    day.addEventListener("click", dayButtons);
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function cleardayButton() {
    calculatedCost.innerHTML = '0';
    for (let day of allDays) {
        day.classList.remove('clicked');
    }
    selectedDays = 0;
    dailyRate = 0;
}
clearButton.addEventListener("click", cleardayButton);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfdayButton() {
    dailyRate = 20;
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');
    recalculate();
}
halfDay.addEventListener("click", halfdayButton);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fulldayButton() {
    dailyRate = 35;
    fullDay.classList.add('clicked');
    halfDay.classList.remove('clicked');
    recalculate();
}
fullDay.addEventListener("click", fulldayButton);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
    var totalCost = selectedDays * dailyRate; 
    calculatedCost.innerHTML = totalCost;
}