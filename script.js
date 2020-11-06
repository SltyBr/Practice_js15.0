'use strict';

let getMessage = ((name, age)=>{
  console.log('Привет ' + name + '! ' + 'тебе ' + age);
});

let count = 0;


let idInterval = setInterval(getMessage, 1000, 'Pasha', 20); // третий аргумент это переменные, который объявляем в функции

setTimeout(function(){
  clearInterval(idInterval);}, 
  5000);




