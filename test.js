let array = [];

function addToArray() {
    if (array.length === 1) {
        array[0].concat()
    }
}
//added to writeNumberToNumberInput(button) if going this route.
if (operationNumbers.length === 1) {
    const currentOperationNumber = operationNumbers[0];
    const numberToAppend = getNumberFromButton(button);
    const newOperationNumber = currentOperationNumber.concat(numberToAppend);
    operationNumbers = [newOperationNumber];
} 
if (operationNumbers.length === 0) {
    operationNumbers.push(getNumberFromButton(button));
}
console.log(operationNumbers)

function removePressedClass() {
    const allButtons = buttonArea.children;
    Array.from(allButtons).map(button => {
        if (button.classList.contains('pressed')) {
            button.classList.remove('pressed');
        }
    })
}

function checkForPressedClass() {
    const allButtons = buttonArea.children;
    Array.from(allButtons).map(button => {
        if (button.classList.contains('pressed')) {
            return true;
        }
    })
}

//Old Draw Functions
// function getNumberFromButton(button) {
//     let clickedNumber = '';
//     Array.from(numberButtons).map(numberButton => {
//         if (button.target.textContent === numberButton.textContent) {
//             clickedNumber = numberButton.textContent;
//         };
//     });
//     return clickedNumber;
// }

// && button.target.classList.contains('number')  --was inside if statement on checkForSingleZero()

// function insertDecimal(button) {
//     const decimalButton = document.querySelector('#decimal');
//     if (button.target === decimalButton) {
//         if (numberInput.textContent.includes('.')) {
//             return;
//         } else numberInput.textContent = numberInput.textContent.concat('.')
//     }
// }

// function clearInput(button) {
//     const clearButton = document.querySelector('#clear');
//     if (button.target === clearButton) {
//         numberInput.textContent = '0';
//     }
// }

// function writeToInput(button) {
//     writeNumberToNumberInput(button);
//     insertDecimal(button);
//     clearInput(button);
// }

// buttonArea.addEventListener('click', writeToInput);