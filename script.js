'use strict';

const element = document.querySelectorAll('.element');

console.log(element);

element.forEach((el)=>{
    el.addEventListener('click', (el)=>{
        console.log(el.target);
    });
});


const mazda = {
    model: 3,
    year: 2006
};

console.log();