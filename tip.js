//let bill = 100
//let tip = 20

let total = function (bill, tip = 20) {
    pay = (bill * (tip / 100))
    return `A ${tip}% tip on $ ${bill} would be $${pay}`
}

//let masraf = total(40, 25)
console.log(total(40, 25))
