let yourScore = 18
let score = (yourScore * 100) / 20

if (score >= 90) {
    let aScore = 'A'
    console.log('You got a ' + aScore + ' (' + score + '%)!')
}

if (score >= 80 && score < 90) {
    let bScore = 'B'
    console.log('You got a ' + bScore + ' (' + score + '%)!')
}

if (score >= 70 && score < 80) {
    let cScore = 'C'
    console.log('You got a ' + cScore + ' (' + score + '%)!')
}

if (score >= 60 && score < 70) {
    let dScore = 'D'
    console.log('You got a ' + dScore + ' (' + score + '%)!')
}

if (score < 60) {
    let fScore = 'F'
    console.log('You got a ' + fScore + ' (' + score + '%)!')
}


edit
