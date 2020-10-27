'use strict';

const inputText = document.getElementById('myText'),
    myBtn = document.getElementById('myBtn'),
    text = document.getElementById('text');

/*const showText = function(){
    text.textContent = localStorage.myText;
};

myBtn.addEventListener('click', function(){
    localStorage.myText = inputText.value;
    showText();
});

showText(); */


const showText = function(){
    text.textContent = localStorage.getItem('memory');
};

const removeStorage = function(n){
    localStorage.removeItem(`${n}`);
};

myBtn.addEventListener('click', function(){
    localStorage.setItem('memory', inputText.value);
    showText();
});


showText();