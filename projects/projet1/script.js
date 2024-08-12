let number = 0;
let numberString = document.getElementById('number');
numberString.innerHTML = `Le compte est de ${number}`;


const btnAdd = document.getElementById('btn-add');
const btnSub = document.getElementById('btn-sub');
const btnReset = document.getElementById('btn-reset');

btnAdd.addEventListener('click', () => {
    number += 1;
    if (number === 10) {
        numberString.innerHTML = `Bravo tu sais compté jusque 10!`;
    } else {
        numberString.innerHTML = `Le compte est de ${number}`;
    }
});

btnSub.addEventListener('click', () => {
    number -= 1;
    numberString.innerHTML = `Le compte est de ${number}`;
});

btnReset.addEventListener('click', () => {
    number = 0;
    numberString.innerHTML = `Le compte est de ${number}`;
});

