'use strict';

const myLesson = [
  {lesson: 1, type: 'basic', points: 2},
  {lesson: 2, type: 'additional', points: 4},
  {lesson: 3, type: 'basic', points: 6},
  {lesson: 4, type: 'additional', points: 3},
  {lesson: 5, type: 'basic', points: 4},
  {lesson: 6, type: 'basic', points: 2},
  {lesson: 7, type: 'additional', points: 2},
  {lesson: 8, type: 'basic', points: 6},
  {lesson: 9, type: 'basic', points: 4},
  {lesson: 10, type: 'basic', points: 6},
  {lesson: 11, type: 'additional', points: 5}, 
  {lesson: 12, type: 'basic', points: 2}, 
  {lesson: 13, type: 'additional', points: 2}, 
  {lesson: 14, type: 'basic', points: 4},
  {lesson: 15, type: 'additional', points: 1},
  {lesson: 16, type: 'additional', points: 7},
];

const myLessonMap = new Map(Object.entries(myLesson));

myLesson.splice(0, myLesson.length); // обнуляем исходный массив

for (let entries of myLessonMap.entries()){ // удаляем ключи, где есть свойство со значением additional
  if (entries[1].type === 'additional'){
    myLessonMap.delete(entries[0]);
  }
}

for (let values of myLessonMap.values()){ // получаем свойства, делим  points на два
  values.points = values.points/2;
  myLesson.push(values); // наполняем исходный массив нужными значениями
}

console.log('Стало', myLesson);