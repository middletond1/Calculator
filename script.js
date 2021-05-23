const numberButtons = document.querySelectorAll('.number');
const buttonArea = document.querySelector('#buttons');
const numberInput = document.querySelector('#numberinput');

function getNumberFromButton(button) {
    let clickedNumber = '';
    Array.from(numberButtons).map(numberButton => {
        if (button.target.textContent === numberButton.textContent) {
            clickedNumber = numberButton.textContent;
        };
    });
    return clickedNumber;
}


function writeNumberToNumberInput(button) {
    console.log(getNumberFromButton(button));
}

buttonArea.addEventListener('click', writeNumberToNumberInput);
