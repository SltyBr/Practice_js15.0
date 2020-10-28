'use strict';

const randomColor = document.querySelector('.random-color'),
    body = document.body,
    getRandom = document.querySelector('.get-random');
/* у this есть четыре правила  callstack и call site*/

function one(){
    console.log('one');
    two();
}
function two(){
    console.log('two');
    three();
}
function three(){
    console.log('three');
}

one(); // место вызова функции call site


function test(){
    console.log('hello', this);
}
//1. привязка this по умолчанию foo()
test();

//2. неявная привязка, это когда указываем объект и его метод obj.foo()

//3. явная привязка apply, call, bind

let obj = {
    x: 10,
    y: 15
};

function newTest(){
    console.log('this: ', this);
}

function hardBind(hard){
    newTest.call(hard);
}
hardBind(obj); // жесткая привязка

setTimeout(hardBind, 5000, obj);

newTest.apply(obj); // принимает массив аргументов
newTest.call(obj); // принимает сколько угодно параметров через запятую

let foo = newTest.bind(obj);

foo();

//============================

// 4. привязка new

randomColor.style.color = '#FFFFFF';
body.style.backgroundColor = randomColor.textContent; 

getRandom.addEventListener('click', function(){
    let num = parseInt(Math.random()*255).toString(16)+parseInt(Math.random()*255).toString(16)+parseInt(Math.random()*255).toString(16),
        hex = '#' + num;

    body.style.backgroundColor = hex;
    getRandom.style.color = hex;
    randomColor.textContent = hex;
});
