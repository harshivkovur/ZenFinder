var option1 = document.getElementById("less than 5");
var option2 = document.getElementById("5-6");
var option3 = document.getElementById("7-8");
var option4 = document.getElementById("9-10");
var option5 = document.getElementById("over 10");

function lessThanFive() {
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
    option5.disabled = true;
}

function fiveToSix() {
    option1.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
    option5.disabled = true;
}

function sevenToEight() {
    option1.disabled = true;
    option2.disabled = true;
    option4.disabled = true;
    option5.disabled = true;
}

function nineToTen() {
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    option5.disabled = true;
}

function overTen() {
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
}

function displayText() {
    var text = document.getElementById("textField"); 
    text.style.display = "block";
}

option1.addEventListener("click", lessThanFive);
option2.addEventListener("click", fiveToSix);
option3.addEventListener("click", sevenToEight);
option4.addEventListener("click", nineToTen);
option5.addEventListener("click", overTen);