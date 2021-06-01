const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const numberInput = document.querySelector('#numberinput');
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

        if (!operator) {
            firstOperand += number;
            drawToDisplay(number);
        }
        if (operator) {
            // clearDisplay()
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
        secondOperand += '.';
        drawToDisplay('.')
    }
    if (solution) {
        clearDisplay()
        drawToDisplay('.')
    }
});

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