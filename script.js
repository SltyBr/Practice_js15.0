window.addEventListener('DOMContentLoaded', () => {
'use strict';

const hello = document.querySelector('.hello'),
      today = document.querySelector('.today'),
      curTime = document.querySelector('.current-time'),
      newYear = document.querySelector('.new-year'),
      dayTime = ['утро', 'день', 'вечер'],
      dayWeek = ['воскресенье','понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']; 

let now = new Date(),
    newYearDate = new Date(2020, 11, 31),
    day = now.getDay(),
    hours = now.getHours();

function getDayWeek(){
  dayWeek.forEach((item, i)=>{
    if (day == i){
      today.textContent = `Сегодня ${item}`;
    }
  });
}
getDayWeek();

function getHello(){
  dayTime.forEach(()=>{
    if (hours > 6 && hours < 12){
      hello.textContent = 'Доброе утро';
    } else if (hours >= 12 && hours < 19){
      hello.textContent = 'Добрый день';
    } else if ( hours >=19 && hours < 22){
      hello.textContent = 'Добрый вечер';
    } else {
      hello.textContent = 'Доброй ночи';
    }
  });
}
getHello();

function getTimeRemaining(){
  let remainingTime = newYearDate.getTime() - now.getTime();
  remainingTime = Math.floor(remainingTime/1000/60/60/24);
  let lastDigit = String(remainingTime)[String(remainingTime).length - 1];

  if(lastDigit == 0){
    remainingTime = remainingTime + ' дней';
  } else if (lastDigit == 1){
    remainingTime = remainingTime + ' день';
  } else if (lastDigit >= 2 && lastDigit <= 4){
    remainingTime = remainingTime + ' дня';
  } else if (lastDigit > 4 && lastDigit < 10){
    remainingTime = remainingTime + ' дней';
  } else if(remainingTime > 10 && remainingTime <= 20){
    remainingTime = remainingTime + ' дней';
  }

  return remainingTime;
}
getTimeRemaining();

newYear.textContent = `До нового года осталось: ${getTimeRemaining()}`;
curTime.textContent = now.toLocaleString('en', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

setInterval(function updateClock(){
  let now = new Date();
  curTime.textContent = now.toLocaleString('en', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
}, 1000);

});
