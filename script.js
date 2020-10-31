'use strict';

const container = document.querySelector('.container'),
      createElement = document.createElement('li');

console.log(createElement);

createElement.textContent = 'Привет';

container.append(createElement);