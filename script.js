const getMessage = ((name, age) => {
  console.log(`Привет ${name}! ` + `тебе ${age}`);
});

/* const idInterval = setInterval(getMessage, 1000, 'Pasha', 20); */
const idTimeout = setTimeout(getMessage, 5000, 'Иван');

clearTimeout(idTimeout);

const date = new Date();

console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(Date.now());
console.log(date.toLocaleDateString());
console.log(Date.parse('10/03/1987'));

let a;

/* date.setFullYear(2000, 12);
console.log(date);

console.log('год ', date.getUTCFullYear());
console.log('месяц ', date.getUTCMonth() + 1);
console.log('День месяца ', date.getUTCDate());
console.log('День недели ', date.getUTCDay());
console.log('Час ', date.getUTCHours()); */
