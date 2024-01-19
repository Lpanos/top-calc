let firstNum = 0;
let secondNum = 0;
let operator = '';

const add = function(a, b) {
    return a + b;
};
  
const subtract = function(a, b) {
    return a - b;
};
  
const multiply = function(a, b) {
    return a * b;
};

const divide = function (a,b){
return a / b;
};
  
const power = function(a,b) {
    return a ** b;
};
  
const operate = function(firstNum,secondNum,operator){
    switch (operator){
        case add:
            add(firstNum,secondNum);
            break;
        case subtract:
            subtract(firstNum,secondNum);
            break;
        case multiply:
            multiply(firstNum,secondNum);
            break;
        case divide:
            divide(firstNum,secondNum);
            break;
        case power:
            power(firstNum,secondNum);
            break;
    }
}