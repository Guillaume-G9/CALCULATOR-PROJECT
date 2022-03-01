let result = document.querySelector('#final');
result.textContent = 0;
let numbers = [];
let totalResult = [];
let numberOne = []

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
        totalResult = []
        numberOne = []
    })
}

export function erase() {
    document.querySelector('#delete').addEventListener('click', () => {
        numbers.pop()
        if(result.textContent === []) {
            result.textContent = [0]
        }else {
            result.textContent = numbers.join('');
        }
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
                totalResult = Number(numberOne) + Number(totalResult);
                console.log(totalResult);
                break;
            case 'subtract':
                totalResult = Number(numberOne) - Number(totalResult);
                break;
            case 'multiply':
                totalResult = Number(numberOne) * Number(totalResult);
                break;
            case 'divide':
                totalResult = Number(numberOne) / Number(totalResult);
                break;
            default:
        }
    }))

    document.querySelector("#equal").addEventListener('click', () => {
        result.textContent = totalResult;
    })
} 
