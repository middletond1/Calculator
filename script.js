const numberButtons = document.querySelectorAll('.number');
const buttonArea = document.querySelector('#buttons');
const numberInput = document.querySelector('#numberinput');
const additionButton = document.querySelector('#addition');
const subtractionButton = document.querySelector('#subtraction');
const multiplicationButton = document.querySelector('#multiplication');
const divisionButton = document.querySelector('#division');
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

function checkForPressedClass() {
    if (buttonArea.classList.contains('pressed')) {
        numberInput.textContent = '';
        buttonArea.classList.remove('pressed');
    }
}

function writeNumberToNumberInput(button) {
    if (numberInput.textContent.length >= 15) {
        return;
    };
    checkForPressedClass();
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

function writeOperationNumberToInput() {
    numberInput.textContent = `${operationNumbers[0]}`;
}

function concatCurrentInputToOpNumbers() {
    operationNumbers.push(parseFloat(numberInput.textContent));
}

function resetOperationsInProgress() {
    buttonArea.classList.remove('addinprogress');
    buttonArea.classList.remove('subtractinprogress');
    buttonArea.classList.remove('multiplyinprogress');
    buttonArea.classList.remove('divideinprogress');
}

function addNumbers(array) {
    if (operationNumbers.length === 1) {
        return;
    }
    let sum = array[0] + array[1];
    operationNumbers = [sum];
    console.log(operationNumbers);
}

function subtractNumbers(array) {
    if (operationNumbers.length === 1) {
        return;
    }
    let difference = array[0] - array[1];
    operationNumbers = [difference];
    console.log(operationNumbers);
}

function multiplyNumbers(array) {
    if (operationNumbers.length === 1) {
        return;
    }
    let product = array[0] * array[1];
    operationNumbers = [product];
    console.log(operationNumbers);
}

function divideNumbers(array) {
    if (operationNumbers.length === 1) {
        return;
    }
    let quotient = array[0] / array[1];
    operationNumbers = [quotient];
    console.log(operationNumbers);
}

function resolveCurrentEquation() {
    if (buttonArea.classList.contains('addinprogress')) {
        addNumbers(operationNumbers);
    } else if (buttonArea.classList.contains('subtractinprogress')) {
        subtractNumbers(operationNumbers);
    } else if (buttonArea.classList.contains('multiplyinprogress')) {
        multiplyNumbers(operationNumbers);
    } else if (buttonArea.classList.contains('divideinprogress')) {
        divideNumbers(operationNumbers);
    }
    writeOperationNumberToInput()
}

function handleEquation() {
    concatCurrentInputToOpNumbers();
    resolveCurrentEquation()
    resetOperationsInProgress();
}

function additionButtonOnPress(button) {
    if (button.target === additionButton && numberInput.textContent !== '') {
        handleEquation();
        buttonArea.classList.add('addinprogress');
        buttonArea.classList.add('pressed');
    }
}

function subtractionButtonOnPress(button) {
    if (button.target === subtractionButton && numberInput.textContent !== '') {
        handleEquation();
        buttonArea.classList.add('subtractinprogress');
        buttonArea.classList.add('pressed');
    }
}

function multiplicationButtonOnPress(button) {
    if (button.target === multiplicationButton && numberInput.textContent !== '') {
        handleEquation();
        buttonArea.classList.add('multiplyinprogress');
        buttonArea.classList.add('pressed');
    }
}

function divisionButtonOnPress(button) {
    if (button.target === divisionButton && numberInput.textContent !== '') {
        handleEquation();
        buttonArea.classList.add('divideinprogress');
        buttonArea.classList.add('pressed');
    }
}

function resetOperationNumberArray() {
    operationNumbers = [];
}

function equalsButtonOnPress(button) {
    const equalsButton = document.querySelector('#equals');
    if (button.target === equalsButton) {
        concatCurrentInputToOpNumbers()
        resolveCurrentEquation()
        resetOperationsInProgress();
        resetOperationNumberArray();
        buttonArea.classList.add('pressed');
    }
}



buttonArea.addEventListener('click', writeToInput);
buttonArea.addEventListener('click', additionButtonOnPress);
buttonArea.addEventListener('click', subtractionButtonOnPress);
buttonArea.addEventListener('click', multiplicationButtonOnPress);
buttonArea.addEventListener('click', divisionButtonOnPress);
buttonArea.addEventListener('click', equalsButtonOnPress);