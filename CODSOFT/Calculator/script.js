let currentInput = '0';
let operator = '';
let prevInput = '0';
function appendNumber(num) {
    if (currentInput === '0') {
        currentInput = num;
    } else {
        currentInput += num;
    }
    updateDisplay();
}
function operate(op) {
    if (operator !== '') {
        calculate();
    }
    operator = op;
    prevInput = currentInput;
    currentInput = '0';
}
function calculate() {
    const num1 = parseFloat(prevInput);
    const num2 = parseFloat(currentInput);
    if (operator === '+') {
        currentInput = (num1 + num2).toString();
    } else if (operator === '-') {
        currentInput = (num1 - num2).toString();
    } else if (operator === '*') {
        currentInput = (num1 * num2).toString();
    } else if (operator === '/') {
        currentInput = (num1 / num2).toString();
    }
    operator = '';
    updateDisplay();
}
function clearDisplay() {
    currentInput = '0';
    operator = '';
    updateDisplay();
}
function updateDisplay() {
    document.getElementById('display').textContent = currentInput;
}
