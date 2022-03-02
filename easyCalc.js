let result = document.querySelector('#final');
let numbers = [];
let totalResult = [];
let numberOne = [];

result.textContent = 0;

export function display() {
    result.textContent = 0;
    document.querySelectorAll('.number').forEach(input => input.addEventListener('click', (e) => {
        numbers.push(Number(e.target.textContent));
        result.textContent = numbers.join('')
        console.log('entry', result.textContent)

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

export function calculation(numberOne, numberTwo) {
    let operator ;
    document.querySelectorAll('.operator').forEach(input => input.addEventListener('click', (e) => {
        numberOne = numbers.join('');
        numbers = [];
        result.textContent = 0;
        operator = e.target.id
        
        if (!operator === add || subtract || multiply || divide) {
            numberTwo = numbers.join('');
            console.log('num2',numberTwo)
        } else {
        } 

        switch (e.target.id) {
            case 'add':
                totalResult = Number(numberOne) + Number(numberTwo);
                console.log('num1', numberOne)
                break;
            case 'subtract':
                totalResult = Number(numberOne) - Number(numberTwo);
                break;
            case 'multiply':
                totalResult = Number(numberOne) * Number(numberTwo);
                break;
            case 'divide':
                totalResult = Number(numberOne) / Number(numberTwo);
                break;
            default:
        }
    }))
                        
    document.querySelector("#equal").addEventListener('click', () => {
    result.textContent = totalResult;
    console.log('equals', result.textContent)
    })
} 
