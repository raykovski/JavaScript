let obTemp = {
    farenheit: 75,

}

let fnTemp = function (temo) {
    return {
        calcCelsius: (temo - 32) * 5 / 9,
        calkKelvin: (temo + 459.67) * 5 / 9
    }
}

let convCelsius = fnTemp(obTemp.farenheit)

console.log(convCelsius)
//console.log(convCelsius.calkKelvin)
console.log(obTemp.farenheit)