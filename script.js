const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const numberInput = document.querySelector('#numberinput');
let firstOperand = '';
let secondOperand = '';
let operator = '';
let solution = '';


numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        const number = numberButton.textContent;

        if (!operator) {
            firstOperand += number;
        }
        if (operator) {
            secondOperand += number;
        }
        

        console.log('firstOperand', firstOperand);

        console.log('secondOperand', secondOperand);

    })
})

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', (event) => {
        const selectedOperator = event.target.textContent;
        if (firstOperand && secondOperand) {
            solveOperation()
        }
        if (firstOperand) {
            solution = '';
            operator = selectedOperator;
        }
        if (solution) {
            firstOperand = solution;
            operator = selectedOperator;
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
    firstOperand = '';
    secondOperand = '';
}

document.querySelector('#equals').addEventListener('click', () => {
    solveOperation();
    if (solution) {
        
    }
    operator = '';
})