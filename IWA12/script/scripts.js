// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const book1 = document.getElementById("book1")
const status1 = book1.querySelector(".status").innerHTML
const reserve1 = book1.querySelector(".reserve")
const checkout1 = book1.querySelector(".checkout")
const checkin1 = book1.querySelector(".checkin")

const book2 = document.getElementById("book2")
const status2 = book2.querySelector(".status").innerHTML
const reserve2 = book2.querySelector(".reserve")
const checkout2 = book2.querySelector(".checkout")
const checkin2 = book2.querySelector(".checkin")

const book3 = document.getElementById("book3")
const status3 = book3.querySelector(".status").innerHTML
const reserve3 = book3.querySelector(".reserve")
const checkout3 = book3.querySelector(".checkout")
const checkin3 = book3.querySelector(".checkin")



reserve1.disabled = STATUS_MAP[status1].canReserve ? false : true;
checkout1.disabled = STATUS_MAP[status1].canCheckout ? false : true;
checkin1.disabled = STATUS_MAP[status1].canCheckIn ? false : true;

console.log(STATUS_MAP[status1])

reserve2.disabled = STATUS_MAP[status2].canReserve ? false : true;
checkout2.disabled = STATUS_MAP[status2].canCheckout ? false : true;
checkin2.disabled = STATUS_MAP[status2].canCheckIn ? false : true;

reserve3.disabled = STATUS_MAP[status3].canReserve ? false: true;
checkout3.disabled = STATUS_MAP[status3].canCheckout ? false: true;
checkin3.disabled = STATUS_MAP[status3].canCheckIn ? false : true;

