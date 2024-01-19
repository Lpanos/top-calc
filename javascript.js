let firstNum = 0;
let secondNum = 0;
let operator = 0;
let newOperator = 0;
let calculating = 0;
const operatorArray = ['+','-','/','x']
let total = 0;

const clearCalc = function(){
    firstNum = 0;
    secondNum = 0;
    operator = 0;
};

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
let total = 0;
    switch (operator){
        case '+':
            total = add(firstNum,secondNum);
            break;
        case '-':
            total = subtract(firstNum,secondNum);
            break;
        case 'x':
            total = multiply(firstNum,secondNum);
            break;
        case '/':
            total = divide(firstNum,secondNum);
            break;
        case '*':
            total = power(firstNum,secondNum);
            break;
    }
    return total;
}

const btn = document.querySelectorAll('button');
const display = document.querySelector('#display');

btn.forEach(function(button){
    button.addEventListener("click",function(){
        if(button.textContent == 'C'){

            clearCalc();

            return display.textContent = '';
        }


        if (operatorArray.includes(button.textContent) && operator){

            display.textContent = (operate(Number(firstNum), Number(secondNum),operator));
                
             clearCalc();

            firstNum = display.textContent;

            operator = button.textContent;

            total = firstNum;

        } else if(operatorArray.includes(button.textContent) && !(operator)){
                    operator = button.textContent;
                                                        console.log(operator + ' is operator LINE 90')
                        display.textContent = '';

            } else if(button.textContent == '=' && operator){
                secondNum = display.textContent;
                    console.log(secondNum + ' is secondNum LINE 95')
                        display.textContent = operate(Number(firstNum), Number(secondNum),operator);
                                clearCalc();
                                    total = display.textContent;
            } else { //if THE BUTTONS PRESSED ARE 0-9 THEN DO THIS SHICK
                if(!(operator)){
                    firstNum += button.textContent;
                } else if(operator){
                    secondNum += button.textContent;
                        if(total){
                            display.textContent = '';
                                total = 0;
                        }
                }
                    //if first number and operator already exist, when attempting to enter number 2 wipe the display.
                    //(but not on every button press, we only want it to wipe on the first before pressing another operator)
                display.textContent += button.textContent;
            };


    })
})