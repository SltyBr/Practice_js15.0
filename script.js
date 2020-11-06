'use strict';
let count = 0;


let idInterval = setInterval(function(){
  count++;
  console.log('Привет я setInterval ', + count);
}, 1000);

setTimeout(function(){
  clearInterval(idInterval);}, 5000);




