'use strict';

const DomElement = function(selector, height, width, bg, fontSize){ //создаём класс с DomElement
  this.selector =  selector;
  this.height =  height;
  this.width =  width;
  this.bg =  bg;
  this.fontSize = fontSize;
};

const box = new DomElement('#weqwew', '100', '100', 'red', '20'); //определяем экземпляр класса, вводим аргументы

DomElement.prototype.createEl = function(){ // добавляем в proto метод, который будем оперировать аргументами
  let el;
  if (this.selector[0] === '.'){ //случай, когда первый элемент точка
      this.selector = this.selector.slice(1); // получаем имя селектора
      el = document.createElement('div');
      el.className = this.selector;
      el.innerText = 'Это класс';
      document.body.prepend(el); // добавляем элемент в DOM структуру
  } else if (this.selector[0] === '#'){ //случай, когда первый элемент решетка
    this.selector = this.selector.slice(1);
    el = document.createElement('p');
      el.id = this.selector;
      el.innerText = 'Это айди';
      document.body.prepend(el);
  } else { // просим ввести корректный селектор
    document.body.innerHTML = 'Селектор должен начинаться с . или #';}
    // с помощью cssText добавляем css свойства элементу
    el.style.cssText = `
      height: ${this.height}px;
      width: ${this.width}px;
      background: red;
      font-size: ${this.fontSize}px;
    `;
};

box.createEl(); //объявляем метод, любуемся

console.log(box);