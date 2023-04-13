const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// i can use the [] notation to address the object properties. 
// however assigning it a name that does not contain '' or - would be petter practice.
// ultimately using better naming of variables would have been a better solution.



const taxAsDecimal = parseInt(tax[913]) / 100
const startingAfterTax = salary - taxAsDecimal
const apartment_type = size +"-"+lodging
const balance =  startingAfterTax - expenses.transport - expenses.food - rent[apartment_type]
console.log("your ballance after tax and expenses is:  R" +  balance.toFixed(2))