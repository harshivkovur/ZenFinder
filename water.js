var option1 = document.getElementById("less than 4");
var option2 = document.getElementById("5-7");
var option5 = document.getElementById("8 or over");

function lessThanFour() {
    option2.disabled = true;
    option3.disabled = true;
}

function fiveToSeven() {
    option1.disabled = true;
    option3.disabled = true;
}


function eightOrOver() {
    option1.disabled = true;
    option2.disabled = true;
}

option1.addEventListener("click", lessThanOver);
option2.addEventListener("click", fiveToSeven);
option5.addEventListener("click", eightOrOver);