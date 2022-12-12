//knav

let result = document.getElementById('result');

//knaps

function addNum(){
let firstNum = 2;
let secondNum = 2;
result.innerHTML = firstNum + secondNum;
}

function subNum(){
    let firstSub = 10;
    let secondSub = 5;
    result.innerHTML = firstSub - secondSub;
}

function multiNum(){
    let firstMulti = 30;
    let secondMulti = 10;
    result.innerHTML = firstMulti * secondMulti;
}

function secondWorst(){
    let FirstNumber = document.getElementById('first').value;
    let SecondNumber =document.getElementById('second').value;
    result.innerHTML = FirstNumber * SecondNumber;
}