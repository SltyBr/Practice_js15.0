'use strict';
const hello = document.querySelectorAll('.hello');
// rest параметр
// ... = rest параметр
function test(a, b, c, ...arr){ // такая конструкция получает массив из аргументов
    console.log(a, b, c);
    console.log(arr);

}

test('red', 5, 12, 'black', [], true, 9);

// spread оператор достаём аргументы функции

const arr1 = ['red', 5, 12, 'apple'];
const arr2 = ['black', 4, 6];

const arr3 = [...arr1, ...arr2]; // с помощью спреда можно объединять два массива и больше

function test1(a, b, c, d, e, f, g){

    console.log(a, b, c, d);
    console.log(e, f, g);
}

test1(...arr1, ...arr2); // spread оператор
console.log(arr3);
console.log(hello);

const helloArr = [...hello];

console.log(helloArr);


// деструкторизация объекта

const car = {
    brand: 'mazda',
    options: {
        color: 'red',
        abs: true
    }
};

//const brand = car.brand; старый синтаксис
//const model = car.model;
//const color = car.color;

const {brand, model = 6, options:{color: colorCar, abs: absCar}} = car; // деструкторизация объекта

console.log(brand, model, colorCar, absCar);

const car1 = {
    brand1: 'mazda',
};

const {brand1, model1 = 6, options:{color = 'red'} = {}} = car1;

console.log(brand1, model1, color);

const createCar = ({brand, model, color, colorInt = 'red'}) => {
    console.log(
        `
        Запущено производство автомобиля ${brand} ${model}
        цвет кузова: ${color}
        цвет салона: ${colorInt}
        `
    );
};

createCar({
    brand: 'mazda',
    model: 3,
    color: 'blue',
});


const cars = ['mazda', 'bmw', 'mercedes-benz', 'audi'];

const [a,, b, c] = cars; // такой записью пропускаем элемент с индексом 1 в массиве

console.log(a);
console.log(b);
console.log(c);

const carsModel = {
    brand: 'Volvo',
    models: {
        sedan: ['s60', 's90'],
        cross: ['v60', 'v90']
    }
};

const {
    models: {
    sedan: [s1, s2], 
        cross: [c1, c2]
    }
} = carsModel;

console.log(s1, s2, c1, c2);

// как создавать объекты из переменных es6

const car3 = 'bentley';
const cycle = 'bmx';
const bike = 'honda';

const transport = {
    car3, 
    cycle, 
    bike,
    ride(){
        console.log('go');
    }
};

transport.ride();

console.log(transport);

// новый метод у object assign

const vehicle = {
    bike: 'honda',
    model3: 'bentley',
    cycle2: 'bmx'
};

const newVehicle = {
    bike: 'suzuki',
    quadBike: 'polaris'
};

// Object.assign(vehicle, newVehicle); // заменяет данные более актуальными, по ключу

const currentVehicle = Object.assign({}, vehicle, newVehicle); // {} - печатает предыдущий объект и новый

/* console.log(vehicle);

console.log(currentVehicle); */

// object spread оператор

const ship = 'Photinia';

const curTrans = {
    ...vehicle, 
    ...currentVehicle, 
    ship,
    ride(){
        console.log('go friends');
    }
};

console.log('object spread ', curTrans);

curTrans.ride();