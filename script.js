'use strict';

// массивы - это объект, в котором ключи проставляются автоматически

let arr = ['apple', 'Apple', 'orange', 'banana', 'watermelow'];

arr.push('qiwi', 'mango'); // добавляет в конец массива один или несколько элементов, меняет его

console.log(arr);

arr.unshift('papaya'); // по аналогии с push, только в начале массива 

console.log(arr);

console.log(arr.pop()); // удаляет последний элемент, не принимает аргументы, хранит последний элемент в памяти
console.log(arr.shift()); // по аналогии с pop, только в начале

console.log(arr);

console.log(arr.sort()); // сортирует по алфавиту, учитывает регистр, сначала верхний, потом нижний

console.log(arr.slice(1, 3)); // принимает аргумент, первый это индекс, с которого начинать массив, 
// второй, которым заканчивать, но второй не учитывается, то есть первый аргумент включается в множество,
// второй нет, не изменяет массив, возращает новый, можно начинать с отрицательного аргумента

console.log(arr.splice(1, 1, 'avocado', 'papaya')); //первый аргумент это с какого индекса будем отрезать,
// второй, это сколько хотим убрать, следующие это значения, которые хотим вставить туда, где отрезали
// возращает удалённые элементы
console.log(arr);

console.log(arr.join()); // конвертирует массив в строку, по умолчанию ставит запятую между, но можно вставить любой символ

console.log(arr.reverse()); // возвращает обратный массив, изменяет исходный
console.log(arr);

console.log(arr.concat(['avocado', 'papaya'])); // добавляет элементы массиву, не изменяет исходный

// переборы объекта

let car = {
    model: 'mazda',
    year: 2006,
    turbocharging: true,
    specification: [],
    style: {
        color: 'blue'
    }
};

for (let key in car){
    console.log('Ключ: ' + key + ' Значение: ' + car[key]);
}

console.log(Object.keys(car).length); // узнаём длину объекта, количество свойств

// перебор массивов

let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}

array.forEach(function(item, i, arr) { // три аргумента, (элемент, индекс, сам массив)
    console.log(item, i, arr);
});

for(let item of array){
    console.log(item);
}

delete array[3]; // удаляет элемент массива, но слот остается
console.log(array);

let obj = {
    a: 3,
    b: 5,
    c: 14
};

delete obj.b; // удаляет элемент объекта

console.log(obj);

// псевдомассивы - объект, который похож на массив, но методов массивов у него нет

function test(){
    console.log(arguments);
}

test(1, 2, 3, 4, 5);


let a = 'cascas12314dwqdqwqw';

console.log(Boolean(parseInt(a)));

let arr1 = 'apple';

function ucFirst(str) {
    if (!str) {return str;}
  
    return str[0].toUpperCase() + str.slice(1);
}

let arr2 = ['apple', 'ball', 'keyboard'];

for (let i = 0; i < arr2.length; i++){
    arr2[i] = ucFirst(arr2[i]);
}


console.log(arr2);




