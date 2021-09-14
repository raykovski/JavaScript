let myAccount = {
    name: 'Andrew',
    expenses: 0,
    income: 0,
}

let add = function (account, amount) {
    account.income = account.income + amount
}

let off = function (account, amount) {
    account.expenses = account.expenses + amount
}


add(myAccount, 1000)
off(myAccount, 100)

console.log(`Account for ${myAccount.name} has ${myAccount.income - myAccount.expenses}. $${myAccount.income} in income. $${myAccount.expenses} in expenses.`)

myAccount.expenses = 0
myAccount.income = 0

console.log(`Account for ${myAccount.name} has ${myAccount.income - myAccount.expenses}. $${myAccount.income} in income. $${myAccount.expenses} in expenses.`)