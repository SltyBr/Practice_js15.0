'use strict';

/* let getMessage = ((name, age)=>{
  console.log('Привет ' + name + '! ' + 'тебе ' + age);
});

let count = 0;


let idInterval = setInterval(getMessage, 1000, 'Pasha', 20); // третий аргумент это переменные, который объявляем в функции

let idTimeout = setTimeout(getMessage, 5000, 'Иван');

clearTimeout(idTimeout); */

/* function contains(where, what){
  for(var i=0; i<what.length; i++){
      if(where.indexOf(what[i]) == -1) {return false;}
  }
  return true;
}

let dna = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};
let dnaKeys = [],
    dnaVal = [];

for (let [key, value] of Object.entries(dna)){
  dnaKeys.push(key);
  dnaVal.push(value);
}

let a = 'GCTAGAAACCTT';


const rnk = function(dnk){
  dnk = dnk.split('');

  if (contains(dnaKeys, dnk)){

  dnk.forEach((item, i ,arr)=>{
    for (let j = 0; j < 4; j++){
      if (item === dnaKeys[j]){
        arr.splice(i, 1, dnaVal[j]);
      }
    }
  });
  dnk = dnk.join('');

  console.log(dnk);
} else{
  console.log('Строка должна содержать только Нуклеотиды');
}
};

rnk(a); */


let arr = [15, 1, 2, 3, 0, 12, 4, 100, 102, 12],
    arrDivided = [],
    counter = 0,
    n = 0;

const funcNum = (array) => {
  while (n < array.length){
    for (let j = n; j < array.length; j++){
        if (array[n] > array[j]){
          counter++;
        }
    }
  arrDivided.push(counter);
  n++;
  counter = 0;
}
  console.log(arrDivided);
};

funcNum(arr);



