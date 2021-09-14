let temp = function (num) {
    let result = (num - 32) / 1.8
    return result
}

let firstValue = temp(32)
let secondValue = temp(68)

console.log(firstValue)
console.log(secondValue)