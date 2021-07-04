let result = 0;
let firstNum = "";
let secondNum = "";
let op = "";

const equals = document.getElementById("equals");
const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const decimal = document.getElementById("decimal");

const cancel = document.getElementById("cancel");
const showResult = document.getElementById("result");

const handleEquals = (e) => {
    if(op === "+")result = Number(firstNum) + Number(secondNum);
    else if(op === "-")result = Number(firstNum) - Number(secondNum);
    else if(op === "*")result = Number(firstNum) * Number(secondNum);
    else if(op === "/")result = Number(firstNum) / Number(secondNum);
    firstNum = String(result);
    secondNum = "";
    showResult.innerText = result;
}
equals.addEventListener('click', handleEquals);

const handleCancel = (e) => {
    firstNum = "";
    secondNum = "";
    op = "";
    result = 0;
    showResult.innerText = result;
}
cancel.addEventListener('click', handleCancel);

const handleNum = (e) => {
    if(op === ""){
        firstNum += e.target.innerText;
    }
    else{
        secondNum += e.target.innerText;
    }
    console.log(Number(firstNum));
    console.log(Number(secondNum));
    console.log(op);
    showResult.innerText = `${firstNum}${op}${secondNum}`;
}
zero.addEventListener('click', handleNum);
one.addEventListener('click', handleNum);
two.addEventListener('click', handleNum);
three.addEventListener('click', handleNum);
four.addEventListener('click', handleNum);
five.addEventListener('click', handleNum);
six.addEventListener('click', handleNum);
seven.addEventListener('click', handleNum);
eight.addEventListener('click', handleNum);
nine.addEventListener('click', handleNum);
decimal.addEventListener('click', handleNum);


const handleOps = (e) => {
    op = e.target.innerText;
    showResult.innerText = `${firstNum}${op}${secondNum}`;
}
add.addEventListener("click", handleOps);
subtract.addEventListener("click", handleOps);
multiply.addEventListener("click", handleOps);
divide.addEventListener("click", handleOps);