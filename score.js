let score = function (num, tot = 20) {
    percent = (num * tot) / 20

    let letter = function (src) {
        if (percent > 90) { return "A" }
        else if (percent >= 80) { return "B" }
        else if (percent >= 70) { return "C" }
        else if (percent >= 60) { return "D" }
        else { return "F" }
    }

    return `You got a ${letter(percent)} - ${percent}%)!`
}

//let result = score(9)
console.log(score(9))