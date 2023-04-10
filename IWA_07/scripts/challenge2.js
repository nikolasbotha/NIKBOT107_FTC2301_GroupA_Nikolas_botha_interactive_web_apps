const nickname= "Timmy";
const firstname = "Timothy";

console.log(`Good Morning, ${nickname || firstname}!`)

// the problem with the code was that the console.log was using 
// template literals using "", instead of the ` back tick notation