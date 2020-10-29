'use strict';

const randomColor = document.querySelector('.random-color'),
    body = document.body,
    getRandom = document.querySelector('.get-random');

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

const getNum = function (a){ // получаем один из элементов 16го кода, добавляем в начале ноль, есть число не двузначное
    a = parseInt(Math.random()*255).toString(16);
    
    if (a== 0 || a < 10){
        a = '0' + a;
    }

    for (let i = 0; i < arr.length; i++){
        if (a == arr[i]){
            a = '0' + a;
        }
    }

    return a;
};

const getRandomColor = function(){ // функция, где конкатенируем три 16х элемента
    let num1,
        num2,
        num3;

    num1 = getNum(num1);
    num2 = getNum(num2);
    num3 = getNum(num3);

    let num = num1 + num2 + num3;

    let hex = '#' + num.toUpperCase(); // строка с финальным результатом

    body.style.backgroundColor = hex; // добавляем переменную, где это необходимо 
    getRandom.style.color = hex; // добавляем переменную, где это необходимо
    randomColor.textContent = hex; // добавляем переменную, где это необходимо
};

body.style.backgroundColor = randomColor.textContent;

getRandom.addEventListener('click', getRandomColor);