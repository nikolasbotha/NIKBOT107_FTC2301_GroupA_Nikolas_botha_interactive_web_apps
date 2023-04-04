// let date = document.getElementById("year").value;
// let status = document.getElementById("occupation").value;

const date = 2050;

if (date === 2050) {
    
    let status = "student"
    let count = 0;

    console.log("January, New Year's day")
    console.log("March, Human Rights Day")
    let month = "April"
    console.log(month, ", Family Day")
 	console.log(month, ", Freedom Day")
    count += 4;
 
        if (status == "student"){
            console.log('June, Youth Day')
        count += 1
        }

    console.log("August, Women’s Day")
    console.log("September, Heritage Day")
    month = 'December'
    console.log(month, 'Day of Reconciliation')
    count += 3

        if (status == "parent") {
            console.log(month, 'Christmas Day')
            count += 1
}
    console.log(month, 'Day of Goodwill')
    count += 1

    console.log('Your status is:', status)
    console.log('The year is:', date)
    console.log('The total holidays is:', count)
}

// old IWA4 code below

// const date: 2050
// const status: 'student'
// const count = 0

// if (date = 2050) {
// 	console.log("January", 'New Year’s Day'
// 	console.log("March", 'Human Rights Day')
// 	date = 'April'
// 	console.log(date, 'Family Day')
// 	console.log(date, 'Freedom Day')
// 	let count = count + 4

// 	if (status = "student") {
// 	  console.log('June', 'Youth Day')
// 		let count = count + 1
//   }

// 	console.log('August', 'Women’s Day')
// 	console.log('September', 'Heritage Day')
// 	date = 'December'
// 	console.log(date, 'Day of Reconciliation')
// 	let count = count + 3

// 	if (status = "parent") {
// 	  console.log(date, 'Christmas Day')
// 		let count = count + 1
//   }

// 	console.log(date, 'Day of Goodwill')
// 	let count = count + 1
// }

// console.log('Your status is:', status)
// console.log('The year is:', date)
// console.log('The total holidays is:', count)