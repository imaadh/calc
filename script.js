function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(add("2",3));
console.log(subtract(2,3))
console.log(multiply(2,3));
console.log(divide(8,2));

function operate (operator, a, b) {
    if (operator == "+") {
        return add(a,b);
    } else if (operator == "-") {
        return subtract(a,b);
    } else if (operator == "x") {
        return multiply(a,b);
    } else if (operator == "/") {
        return divide(a,b);
    }
}

console.log(operate("*",4,8));

const numbers = document.querySelectorAll(".number");

let numberFirst = "";
let operator = "";
let numberSecond = "";

const display = document.querySelector("#display");

numbers.forEach((numberdiv) => {
    numberdiv.addEventListener(
        "click", function() {
            // console.log(numberdiv.textContent);
            if (operator == "") {
                numberFirst = numberFirst + numberdiv.textContent;
                display.textContent = numberFirst;
                console.log("first: "+numberFirst);
            } else if (operator != "") {
                numberSecond = numberSecond + numberdiv.textContent;
                display.textContent = numberSecond;
                console.log("second: "+numberSecond);
            }
            
            
        }
    )
})

const calcfuncs = document.querySelectorAll(".calcfunc");

calcfuncs.forEach((button) => {
    button.addEventListener(
        "click", function() {
            operator = button.textContent;
            display.textContent = operator;
            console.log(operator);
        }
    )
})

const equals = document.querySelector(".equals");

equals.addEventListener(
    "click", function() {
        let result = operate(operator,parseInt(numberFirst),parseInt(numberSecond));
        display.textContent = result;
        console.log(result);
        numberFirst = result;
        numberSecond = "";
    }
)
