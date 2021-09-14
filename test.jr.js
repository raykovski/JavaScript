let score = function (num, tot = 20) {
    percent = (num * tot) / 20

    if (percent >= 90) {
        return `You got an A - ${percent}%)!`
    }
    if (percent >= 80 && percent < 90) {
        return `You got a B - ${percent}%)!`
    }
    if (percent >= 70 && percent < 80) {
        return `You got a C - ${percent}%)!`
    }
    if (percent >= 60 && percent < 70) {
        return `You got a D - ${percent}%)!`
    }
    if (percent < 60) {
        return `You got a F - ${percent}%)!`
    }
}

let result = score(16)
console.log(result)