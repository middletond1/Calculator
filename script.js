const numberButtons = document.querySelectorAll('.number');
const buttonArea = document.querySelector('#buttons');
const numberInput = document.querySelector('#numberinput');
let operationNumbers = [];

function getNumberFromButton(button) {
    let clickedNumber = '';
    Array.from(numberButtons).map(numberButton => {
        if (button.target.textContent === numberButton.textContent) {
            clickedNumber = numberButton.textContent;
        };
    });
    return clickedNumber;
}

function checkForSingleZero(button) {
    if (numberInput.textContent === '0' && numberInput.textContent.length === 1 && button.target.classList.contains('number')) {
        numberInput.textContent = '';
    };
}

function writeNumberToNumberInput(button) {
    if (numberInput.textContent.length >= 15) {
        return;
    };
    checkForSingleZero(button);
    numberInput.textContent = numberInput.textContent.concat(getNumberFromButton(button));
}

function insertDecimal(button) {
    const decimalButton = document.querySelector('#decimal');
    if (button.target === decimalButton) {
        if (numberInput.textContent.includes('.')) {
            return;
        } else numberInput.textContent = numberInput.textContent.concat('.')
    }
}

function clearInput(button) {
    const clearButton = document.querySelector('#clear');
    if (button.target === clearButton) {
        numberInput.textContent = '0';
    }
}

function writeToInput(button) {
    writeNumberToNumberInput(button);
    insertDecimal(button);
    clearInput(button);
}

function getCurrentInputNumber() {
    operationNumbers.push(parseFloat(numberInput.textContent));
    console.log(operationNumbers);
}

function operationStuff(button) {
    const additionButton = document.querySelector('#addition')
    if (button.target === additionButton) {
        getCurrentInputNumber();
    }
}

buttonArea.addEventListener('click', writeToInput);
buttonArea.addEventListener('click', operationStuff);