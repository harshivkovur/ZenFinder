var option1 = document.getElementById("yes");
var option2 = document.getElementById("no");

function yes() {
    option2.disabled = true;
}

function no() {
    option1.disabled = true;
}

option1.addEventListener("click", yes);
option2.addEventListener("click", no);