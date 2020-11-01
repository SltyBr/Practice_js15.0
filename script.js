'use strict';

const element = document.querySelectorAll('.element');

console.log(element);

element.forEach((el)=>{
    el.addEventListener('click', (el)=>{
        console.log(el.target);
    });
});


const car = {
    brand: 'mazda',
    model: 3,
    year: 2006,
    get fullTitle() {
        return this.brand + ' ' + this.model;
    },
    set fullTitle(value){
        this.brand = value;
    }
};

//mazda['color'] = 'blue';
//mazda.color = 'blue';

Object.defineProperty(car, 'color',{
    value: 'red',
    writable: true, // (возможность перезаписи) если менять на ложь, мы не сможем редактировать свойство value вне объекта и *
    configurable: true, // если менять на ложь, то не сможем удалять элемент из объекта *
    enumerable: true // ложь делает свойство невидимым *
});

//mazda.color = 'blue'; // * выдаст ошибку

//delete mazda.color;

console.log(car);

for (let key in car) { // * при переборе, если enumerable false, red не появится в списке
    console.log(key, car[key]);
}
/* 
Object.defineProperty(car, 'fullTitle',{ // getter что-то неоднозначное, ни функция, ни метод, а скорее свойство
    get: function(){
        return this.brand + ' ' + this.model;
    },
    set: function(val){ // в es6 можно геттер и сеттер писать сразу в объекте
        this.brand = val;
    }
});
 */
car.color = 'blue';

car.fullTitle = 'BMW';

console.log(car.fullTitle);

console.log(car.fullTitle);