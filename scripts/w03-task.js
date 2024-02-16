/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

const add = (x, y) => x + y;

const addNumbers = () => {
    let add1 = parseFloat(document.getElementById("add1").value);
    let add2 = parseFloat(document.getElementById("add2").value);
    let sum = add(add1, add2);
    document.getElementById("sum").value = sum.toFixed(0);
};
document.getElementById("addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */

const Subtract = (x, y) => x - y;

const subtractNumbers = () => {
    let subtract1 = parseFloat(document.getElementById("subtract1").value);
    let subtract2 = parseFloat(document.getElementById("subtract2").value);
    let difference = Subtract(subtract1, subtract2);
    document.getElementById("difference").value = difference.toFixed(0);
};

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */

const Multiply = (x, y) => x * y;

const multiplyNumbers = () => {
    let factor1 = parseFloat(document.getElementById("factor1").value);
    let factor2 = parseFloat(document.getElementById("factor2").value);
    let product = Multiply(factor1, factor2);
    document.getElementById("product").value = product.toFixed(0);
};

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (x, y) => x / y;

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient.toFixed(1);
};
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function getTotal() {
    //initialize variables
    let total = 0;

    //input
    let subtotal = parseFloat(document.getElementById("subtotal").value);

    //processing
    if (document.getElementById("member").checked) {
    subtotal = subtotal - subtotal * 0.2; //20%discount
    }
    //output
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}
document.getElementById("getTotal").addEventListener("click", getTotal);


/* ARRAY METHODS - Functional Programming */
// Declare and instantiate an array variable to hold the numbers 1 through 13
const numbersArray = Array.from({length: 13}, (_, i) => i + 1);

/* Output Source Array */

document.getElementById("array").textContent = numbersArray.join(", ");
/* Output Odds Only Array */

const oddNumbers = numbersArray.filter(number => number % 2 !== 0);

document.getElementById("odds").textContent = oddNumbers.join(", ");

/* Output Evens Only Array */

const evenNumbers = numbersArray.filter(number => number % 2 === 0);

document.getElementById("evens").textContent = evenNumbers.join(", ");

/* Output Sum of Org. Array */

const sumOfArray = numbersArray.reduce((acc, curr) => acc + curr, 0);

document.getElementById("sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */

const multipliedArray = numbersArray.map(number => number * 2);

document.getElementById("multiplied").textContent = multipliedArray.join(", ");

/* Output Sum of Multiplied by 2 Array */

const sumOfMultiplied = multipliedArray.reduce((acc, curr) => acc + curr, 0);

document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;
