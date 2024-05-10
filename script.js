const generateButton = document.getElementById("generateButton");
let display = document.getElementById("displayNumber");
let warning = document.getElementById("warningDisplay");
let lower, upper, randNum;

generateButton.onclick = function() {
        warning.textContent = "";
        lower = document.getElementById("minInput").value;
        lower = Math.abs(Number(lower));
        upper = document.getElementById("maxInput").value;
        upper = Math.abs(Number(upper));
        
        if ((lower <= upper) && (typeof lower == "number") && (typeof upper == "number")) {
                randNum = Math.trunc(Math.random() * (upper - lower)) + lower;
                display.textContent = randNum;
        } else {
                warning.textContent = "Min must be lesser than max and/or both numbers MUST be numbers";
        }
}