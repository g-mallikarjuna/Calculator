const displayInput = document.getElementById("displayInputScreen");
const displayOutput = document.getElementById("displayOutputScreen");
let answer = "";
function appendDisplay(input) {
    displayInput.value += input;
    displayInput.scrollLeft = displayInput.scrollWidth;
}
function clearDiplay() {
    displayInput.value = "";
    displayInput.style.width = "100%";
    displayInput.style.fontSize = "4rem";
    displayInput.style.color = "White";
    displayOutput.value = "";

}
function answerDisplay() {
    displayInput.value += answer;
    displayInput.style.width = "100%";
    displayInput.style.fontSize = "4rem";
    displayInput.style.color = "White";
    displayInput.scrollLeft = displayInput.scrollWidth;
    if (displayInput.value.length > 10) {
        displayInput.style.fontSize = "36px";
    }
    displayOutput.value = "";
}
function applyEqual() {
    try {
        displayInput.style.fontSize = "26px";
        displayInput.style.color = "gray";
        displayInput.style.transition = "0.5s ease-out";
        displayOutput.value = eval(displayInput.value);
        answer = displayOutput.value;
        if (displayOutput.value.length > 10) {
            displayOutput.style.fontSize = "36px";
        }
        if (window.innerWidth <= 760) {
            displayInput.style.fontSize = "12px"
            displayOutput.style.fontSize = "18px";
            displayOutput.style.color = "white";
        }
    }
    catch (e) {
        displayOutput.value = "Error";
    }
}