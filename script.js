const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const numberInput = document.querySelector('#numberinput');
const buttonsArea = document.querySelector('#buttons');
let firstOperand = '';
let secondOperand = '';
let operator = '';
let solution = '';

// debugger;
function drawToDisplay(button) {
    checkForSingleZero()
    numberInput.textContent += `${button}`;
}

function checkForSingleZero() {
    if (numberInput.textContent === '0' && numberInput.textContent.length === 1) {
        numberInput.textContent = '';
    };
}

function clearDisplay() {
    numberInput.textContent = '';
}

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        const number = numberButton.textContent;

        if (solution) {
            clearDisplay();
            solution = '';
        }
        if (!operator) {
            firstOperand += number;
            drawToDisplay(number);
        }
        if (operator) {
            if (buttonsArea.classList.contains('operatorClicked')) {
                clearDisplay()
                buttonsArea.classList.remove('operatorClicked')
            }
            secondOperand += number;
            drawToDisplay(number);
        }
        

        console.log('firstOperand', firstOperand);

        console.log('secondOperand', secondOperand);

    })
})

document.querySelector('#decimal').addEventListener('click', () => {
    if (!operator) {
        if (firstOperand.includes('.')) {
            return
        }
        firstOperand += '.';
        drawToDisplay('.')
    }
    if (operator) {
        if (secondOperand.includes('.')) {
            return
        }
        if (buttonsArea.classList.contains('operatorClicked')) {
            clearDisplay()
            buttonsArea.classList.remove('operatorClicked')
        }
        secondOperand += '.';
        drawToDisplay('.');
    }
    if (solution) {
        clearDisplay();
        drawToDisplay('.');
        solution = '';
    }
});

document.querySelector('#clear').addEventListener('click', () => {
    if (firstOperand && !secondOperand) {
        firstOperand = '';
    }
    if (secondOperand) {
        secondOperand = '';
    }
    clearDisplay()
})

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', (event) => {
        const selectedOperator = event.target.textContent;
        if (firstOperand && secondOperand) {
            solveOperation()
            firstOperand = solution;
        }
        if (firstOperand) {
            solution = '';
            operator = selectedOperator;
            // clearDisplay()
        }
        if (solution) {
            firstOperand = solution;
            operator = selectedOperator;
            clearDisplay()
        }
        buttonsArea.classList.add('operatorClicked');
        console.log(operator);
    })
})

function solveOperation() {
    firstNumber = parseFloat(firstOperand);
    secondNumber = parseFloat(secondOperand);
    if (firstOperand && secondOperand && operator) {
        if (operator === '+') {
            solution = firstNumber + secondNumber;
        };
        if (operator === '-') {
            solution = firstNumber - secondNumber;
        };
        if (operator === 'X') {
            solution = firstNumber * secondNumber;
        };
        if (operator === '÷') {
            solution = firstNumber / secondNumber;
        };
    }
    console.log(solution);
    clearDisplay()
    drawToDisplay(solution);
    firstOperand = '';
    secondOperand = '';
}

document.querySelector('#equals').addEventListener('click', () => {
    solveOperation();
    operator = '';
})