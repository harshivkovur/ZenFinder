var option1 = document.getElementById("sad");
var option2 = document.getElementById("meh");
var option3 = document.getElementById("happy");

function sad() {
    option2.disabled = true;
    option3.disabled = true;
}

function meh() {
    option1.disabled = true;
    option3.disabled = true;
}

function happy() {
    option1.disabled = true;
    option2.disabled = true;
}

option1.addEventListener("click", sad);
option2.addEventListener("click", meh);
option3.addEventListener("click", happy);
