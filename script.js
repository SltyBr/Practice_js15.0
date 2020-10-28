'use strict';

const randomColor = document.querySelector('.random-color'),
    body = document.body,
    getRandom = document.querySelector('.get-random');

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

const getNum = function (a){
    a = parseInt(Math.random()*255).toString(16);
    
    if (a== 0 || a < 10){
        a += '0';
    }

    for (let i = 0; i < arr.length; i++){
        if (a == arr[i]){
            a += '0';
        }
    }
    console.log(a);
    return a;
};

const getRandomColor = function(){
    let num1,
        num2,
        num3;

    num1 = getNum(num1);
    num2 = getNum(num2);
    num3 = getNum(num3);

    let num = num1 + num2 + num3;

    let hex = '#' + num.toUpperCase();

    body.style.backgroundColor = hex;
    getRandom.style.color = hex;
    randomColor.textContent = hex;
};

body.style.backgroundColor = randomColor.textContent;

getRandom.addEventListener('click', getRandomColor);