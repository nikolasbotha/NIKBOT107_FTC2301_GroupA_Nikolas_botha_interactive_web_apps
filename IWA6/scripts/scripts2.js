
const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

let balance = 0

if ((hourOfDay || minuteOfDay !== null) || (hourOfDay && minuteOfDay === 00)) {
	let taxAsDecimal = parseInt(tax)/100;
    let startingAfterTax = salary - (salary  * taxAsDecimal)
	balance = startingAfterTax - transport - food - rent;
}
	
console.log(balance.toFixed(3))