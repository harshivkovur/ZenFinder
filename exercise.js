var option1 = document.getElementById("30 min or less");
var option2 = document.getElementById("1 hr");
var option3 = document.getElementById("2 hr");
var option4 = document.getElementById("over 2 hrs");

function thirtyOrLess() {
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
}

function oneHour() {
    option1.disabled = true;
    option2.disabled = true;
    option4.disabled = true;
}

function twoHour() {
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
}

function overTwoHours() {
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
}

option1.addEventListener("click", thirtyOrLess);
option2.addEventListener("click", oneHour);
option3.addEventListener("click", twoHour);
option4.addEventListener("click", overTwoHours);