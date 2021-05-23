const numberButtons = document.querySelectorAll('.number');
const buttonArea = document.querySelector('#buttons');

function getNumberFromButton(button) {
    Array.from(numberButtons).map(numberButton => {
        if (button.target.textContent === numberButton.textContent) {
            return numberButton.textContent;
        }
    });
}

buttonArea.addEventListener('click', getNumberFromButton);
