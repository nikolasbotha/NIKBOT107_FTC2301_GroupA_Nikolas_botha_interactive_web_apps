const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const leoOwed = (parseFloat(leoBalance))*-1

const SarahOwed = (parseFloat(sarahBalance))*-1

const owed = leoOwed + SarahOwed
const thousands = parseInt(owed/1000 )  
const remainder = ( owed % 1000) 


let leo = `${leoName.trim()} ${leoSurname.trim()}  (Owed: R  ${leoOwed.toFixed(2)})`;
let Sarah = `${sarahName.trim()} ${sarahSurname.trim()}  (Owed: R  ${SarahOwed.toFixed(2)}`;
const total = "Total amount owed: "
const owedPrint = ` R ${thousands} ${remainder.toFixed(2)}`
const result = leo + "\n" + Sarah + "\n \n" + divider + "\n\t" + total + owedPrint + "\n" + divider



console.log(result)


// OLD CODE

// const leoName = 'Leo'
// const leoSurname = 'Musvaire     '
// const leoBalance = '-9394'

// const sarahName = 'Sarah    '
// const sarahSurname = 'Kleinhans'
// const sarahBalance = '-4582.21000111'

// const divider = '----------------------------------'

// // Only change below this line

// const owed = parseInt('R' + leoBalance + sarahBalance)
// const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
// const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
// const total = "Total amount owed: "
// const result = leo + sarah + divider + divider + total + owed + divider

// console.log(result)