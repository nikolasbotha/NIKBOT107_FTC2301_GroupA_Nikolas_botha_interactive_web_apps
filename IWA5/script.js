const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'


// customer info
let customer_location = "RSA"
let customer_number = 1
let currency = "R"
// customer purchase info (extracted from shopping basket)
let shoes_quantity = 1 
let toys_quantity = 5 
let shirts_quantity = 0 
let batteries_quantity = 2 
let pens_quantity = 0 

// product price info
let shoes_price = 300 
let toys_price = 100 
let shirts_price = 150 
let batteries_price = 35 
let pens_price = 5 

// shipping info
const Shipping_price_SA = 400
const Shipping_price_NAM = 600
const Shipping_price_international = 800



let shipping_price = 0
let total = 0 

// config customer location, shipping and currency
if (customer_location == "RSA" ) {
    currency = "R"
    shipping_price = Shipping_price_SA
}

if (customer_location == "NAM" ) {
    currency = "NAM$"
    shipping_price = Shipping_price_NAM
}

if (customer_location !== ("RSA"||"NAM")){
    currency = "$"
    customer_location = "international"
    shipping_price = Shipping_price_international
}

// calculate customer transaction
let shoes_total = shoes_quantity * shoes_price
let toys_total = toys_quantity* toys_price
let shirts_total = shirts_quantity* shirts_price
let batteries_total = batteries_quantity * batteries_quantity
let pens_total = pens_quantity * pens_price

let shopping_total= shoes_total +  toys_total  + shirts_total + batteries_total + pens_total

if (shopping_total >= 1000 && (customer_location == RSA || customer_location == "NAM")) {
    shipping_price = 0
}

// logging to the console 

if (shipping = 0 && (customers !== 1)) {
     console.log(FREE_WARNING) }
if (customer_location == "NK"){
    console.log(BANNED_WARNING)
}
else {
    console.log("Total price = " + (shopping_total + shipping_price))
    console.log("purchase price: "+ shopping_total)
    console.log(shoes_total + "+" + toys_total+ "+"+ shirts_total + "+" + batteries_total + "+" +pens_total + "="+ shopping_total )
    console.log("shipping price: "+ shipping_price)
    console.log("location : " + customer_location)
    console.log("number of customers: " + customer_number)
    console.log("currency: " + currency)
}



// shoes = 300 * 1
// toys - 100 * 5
// shirts = 150 * 'NONE_SELECTED'
// batteries 35 * 2
// pens = 5 * 'NONE_SELECTED' 

// shipping = null
// currency = $

// if (shoes + batteries + pens + shirts > 1000 &&  ) {
// 	if (location = NAM && customers < 2) {
// 			if (location = RSA)
// 		    shipping = 0 || calcShipping
// 		}
// 	}
// }

// if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

// location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

// customers = '1'
// const location = 'RSA'
// currency = null