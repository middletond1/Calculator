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