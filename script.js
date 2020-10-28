'use strict';

const randomColor = document.querySelector('.random-color'),
    body = document.body,
    getRandom = document.querySelector('.get-random');

body.style.backgroundColor = randomColor.textContent;

const getRandomColor = function(){
    let num1 = parseInt(Math.random()*255).toString(16),
        num2 = parseInt(Math.random()*255).toString(16),
        num3 = parseInt(Math.random()*255).toString(16);
    
    let num = num1 + num2 + num3;

    if (num1 == 0){
        num1 = 0 + '0';
    }
    if (num2 == 0){
        num2 = 0 + '0';
    }
    if (num3 == 0){
        num3 = 0 + '0';
    }
    let hex = '#' + num;


        body.style.backgroundColor = hex;
        getRandom.style.color = hex;
        randomColor.textContent = hex;
    
    console.log(num);
};

getRandom.addEventListener('click', getRandomColor);

