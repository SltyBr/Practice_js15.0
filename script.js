'use strict';
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
//привязка this по умолчанию
test();

