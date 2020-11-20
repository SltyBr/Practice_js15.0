'use strict';

const dateTime = document.querySelector('.date'),
      dateFirst = document.querySelector('.dateFirst');


function dateRefresh(){
  let now = new Date(),
    year = now.getFullYear(),
    month = now.getMonth(),
    day = now.getDay(),
    date = now.getDate(),
    hour = now.getHours(),
    minute = now.getMinutes(),
    second = now.getSeconds(),
    curMonth,
    curDay,
    newDate;


switch (month)
{
  case 0: curMonth='января'; break;
  case 1: curMonth='февраля'; break;
  case 2: curMonth='марта'; break;
  case 3: curMonth='апреля'; break;
  case 4: curMonth='мая'; break;
  case 5: curMonth='июня'; break;
  case 6: curMonth='июля'; break;
  case 7: curMonth='августа'; break;
  case 8: curMonth='сентября'; break;
  case 9: curMonth='октября'; break;
  case 10: curMonth='ноября'; break;
  case 11: curMonth='декабря'; break;
}

switch (day)
{
    case 0: curDay= 'воскресенье'; break;
    case 1: curDay= 'понедельник'; break;
    case 2: curDay= 'вторник'; break;
    case 3: curDay= 'среда'; break;
    case 4: curDay= 'четверг'; break;
    case 5: curDay= 'пятница'; break;
    case 6: curDay= 'суббота'; break;
}

let nameHour = (hour == 1) ? 'час':
    (hour < 5) ? 'часа':
    'часов';

function zeroFirst(day){
    if (day < 10) {
      day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }

    if (hour < 10) {
      hour = '0' + hour;
    }

    if (minute < 10) {
      minute = '0' + minute;
    }

    if (second < 10) {
      second = '0' + second;
    }
}

zeroFirst();

dateTime.innerHTML = 'Сегодня ' + curDay + ', ' + date + ' ' + curMonth + ' ' + year + ' года, ' +  hour + ' ' + nameHour + ' ' + minute    +  ' минут ' + second + ' секунд';
  newDate = date + '.' + (+month + 1) + '.' + year + ' - ' + hour + ':' + minute + ':' + second;
  dateFirst.innerHTML = newDate;
}

dateRefresh();

setInterval(dateRefresh, 1000);
