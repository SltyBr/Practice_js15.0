'use strict';

const collections = document.querySelectorAll('.collection'),
      elems = document.querySelectorAll('.elem');

const newElem = document.createElement('li'); // создаёт парный тэг html, можно указать любую комбинацию

console.log(newElem);

console.log(collections);
console.log(elems);

//elems[3].remove(); // удаляет элемент из DOM дерева, не удаляет элемент из коллекции
//elems[1].remove();

/* collections[1].append(elems[3]);  */// вставляем элемент в конец родителя DOM дерева
/* collections[1].append(elems[1]); */ // именно берёт и перемещает элементы, не копирует

/* collections[0].before(collections[1]); */ // берет аргумент коллекции1 и вставляет перед коллецкией0

/* elems[5].after(elems[0]);
elems[2].before(elems[4]); */

/* elems[2].replaceWith(elems[3]); */ // заменяет elems2 на elems3, elems2 удаляет из дом дерева

/* const elemClone = elems[3].cloneNode(true);  */// клонирует узел целиком, создаёт новый 

/* elemClone.classList.add('newElem');
elemClone.textContent = 'new elem'; */

/* collections[1].append(elemClone); */

elems[2].textContent = 'Привет'; // переписывает текст внутри тэга