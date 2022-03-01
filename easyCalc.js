let result = document.querySelector('#final');
result.textContent = 0;
let numbers = [];
let totalResult = [];

export function display() {
    result.textContent = 0;
    document.querySelectorAll('.number').forEach(input => input.addEventListener('click', (e) => {
        numbers.push(Number(e.target.textContent));
        result.textContent = numbers.join('')

    }))
}

export function resetDisp() {
    document.querySelector('#reset').addEventListener('click', () => {
        result.textContent = 0;
        numbers = []
    })
}

export function erase() {
    document.querySelector('#delete').addEventListener('click', () => {
        numbers.pop()
        result.textContent = numbers.join('');
    })
}
let operator;

export function calculation(numberOne, numberTwo) {
    document.querySelectorAll('.operator').forEach(input => input.addEventListener('click', (e) => {
        numberOne = numbers.join('');
        numbers = [];
        result.textContent = 0;

        switch (e.target.id) {
            case 'add':
                operator = '+';
            break;
            case 'subtract':
                operator = '-';
            break;
            case 'multiply':
                operator = '*';
            break;
            case 'divide':
                operator = '/';
            break;
            default:
        }
    }))

    document.querySelector("#equal").addEventListener('click', () => {
        switch (operator) {
            case '+':
                totalResult = Number(numberOne) + Number(numbers.join(''));
                break;
            case '-':
                totalResult = Number(numberOne) - Number(numbers.join(''));
                break;
            case '*':
                totalResult = Number(numberOne) * Number(numbers.join(''));
                break;
            case '/':
                totalResult = Number(numberOne) / Number(numbers.join(''));
                break;
            default:          
        }
        result.textContent = totalResult;
    })
} 
