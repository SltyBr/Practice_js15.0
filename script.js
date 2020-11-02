'use strict';

const myLesson = ([
    {
        lesson: 1, 
        type: 'basic', 
        points: 2
    },
    {
        lesson: 2, 
        type: 'additional', 
        points: 4
    },
    {
        lesson: 3, 
        type: 'basic', 
        points: 6},
    {
        lesson: 4, 
        type: 'additional', 
        points: 3},
    {
        lesson: 5, 
        type: 'basic', 
        points: 4},
    {
        lesson: 6, 
        type: 'basic', 
        points: 2
    },
    {
        lesson: 7, 
        type: 'additional', 
        points: 2
    },
    {
        lesson: 8, 
        type: 'basic', 
        points: 6
    },
    {
        lesson: 9, 
        type: 'basic', 
        points: 4
    }
]);

const lessonMap = new Set();

myLesson.forEach( (key)=>{
    console.log(key);
});

console.log(myLesson[3]);