let btn_1 = document.getElementById("btn-1");
let btn_2 = document.getElementById("btn-2");
let btn_3 = document.getElementById("btn-3");
let btn_4 = document.getElementById("btn-4");
let btn_5 = document.getElementById("btn-5");
let btn_6 = document.getElementById("btn-6");
let btn_7 = document.getElementById("btn-7");
let btn_8 = document.getElementById("btn-8");
let btn_9 = document.getElementById("btn-9");

let btn_add = document.getElementById("btn-add");
let btn_sub = document.getElementById("btn-sub");
let btn_mul = document.getElementById("btn-mul");
let btn_div = document.getElementById("btn-div");

let btn_calculate = document.getElementById("btn_calculate");

let number1 = parseInt(btn_1.value);
let number2 = parseInt(btn_2.value);
let number3 = parseInt(btn_3.value);
let number4 = parseInt(btn_4.value);
let number5 = parseInt(btn_5.value);
let number6 = parseInt(btn_6.value);
let number7 = parseInt(btn_7.value);
let number8 = parseInt(btn_8.value);
let number9 = parseInt(btn_9.value);

let add = btn_add.value;
let sub = btn_sub.value;
let mul = btn_mul.value;
let div = btn_div.value;

let calculationArray = [];
let joinCalculationArray = calculationArray.join("");
let insertion = document.getElementById("insertion");


function addInArray(value) {
    return calculationArray.push(value);
}

function calculate() {

    let intCalculationArray = 0;

    for (let element of calculationArray) {
        console.log(element);
        if (element !== "+" && element !== "-" && element !== "/" && element !== "*") {
            intCalculationArray.push(element);
        } else {
            intCalculationArray.push(element);
        }

    }


    console.log(intCalculationArray);
}

btn_1.addEventListener("click", () => {
    addInArray(number1);
    insertion.innerHTML = joinCalculationArray;
    console.log(calculationArray);
    console.log(joinCalculationArray);
});
btn_2.addEventListener("click", () => {
    addInArray(number2);
    insertion.innerHTML = joinCalculationArray;
    console.log(calculationArray);
    console.log(joinCalculationArray);
});
btn_3.addEventListener("click", () => {
    addInArray(number3);
    console.log(calculationArray);
});
btn_4.addEventListener("click", () => {
    addInArray(number4);
    console.log(calculationArray);
});
btn_5.addEventListener("click", () => {
    addInArray(number5);
    console.log(calculationArray);
});
btn_6.addEventListener("click", () => {
    addInArray(number6);
    console.log(calculationArray);
});
btn_7.addEventListener("click", () => {
    addInArray(number7);
    console.log(calculationArray);
});
btn_8.addEventListener("click", () => {
    addInArray(number8);
    console.log(calculationArray);
});
btn_9.addEventListener("click", () => {
    addInArray(number9);
    console.log(calculationArray);
});

btn_add.addEventListener("click", () => {
    addInArray(add);
    console.log(calculationArray);
});
btn_sub.addEventListener("click", () => {
    addInArray(sub);
    console.log(calculationArray);
});
btn_mul.addEventListener("click", () => {
    addInArray(mul);
    console.log(calculationArray);
});
btn_div.addEventListener("click", () => {
    addInArray(div);
    console.log(calculationArray);
});
btn_calculate.addEventListener("click", () => {
    calculate();
});





