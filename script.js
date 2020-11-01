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

class CarWash {
    constructor(brand, model = CarWash.noCarBaseModel(), services = []){ // метод который создаётся в момент создания класса и подготавливает объект
        this.brand = brand;
        this.model = model;
        this.washed = false;
        this._services = services;
    }

    static noCarBaseModel(){ // статический метод, возвращает значение по умолчанию, нельзя вызвать из объекта
        return 'none';
    }

    washReady(){
        this.washed = true;
        CarWash.counter++;
        this.report();
    }

    report(){
        console.log(this.brand, this.model, this.washed);
    }

    get services(){
        console.log(this._services);
        return this._services.length > 0 ? 'Есть доп услуги' : 'Нет доп услуг';
    }

    set services(addServices){
        return this._services.push(addServices);
    }
}

// наследование, такая запись позволяет passcar наследовать всё от carwash, для наследования определённых свойств используем super
class PassCar extends CarWash{
    constructor(brand, model, services, pass = 5){ // наследуем конструктор от родителя, можем расширять
        super(brand, model, services);
        this.pass = pass;
    }

    washReady(){
        super.washReady(); // можно наследовать метод через super с указанием имени метода
        this.reportOffice();
    }

    reportOffice(){
        console.log('На мойке для легковых была помыта машина');
    }
}

CarWash.counter = 0;

const car1 = new CarWash('mazda', 3, ['black tires', 'wax']);
const car2 = new PassCar('BMW', 2);


car1.washReady();

console.log('counter: ' + CarWash.counter);


console.log('counter: ' + CarWash.counter);

car1.services = 'Протирка стёкол';
console.log(car1.services);
console.log(car2.services);



console.log('машина 1 ', car1);
console.log('машина 2 ', car2);

car2.washReady();