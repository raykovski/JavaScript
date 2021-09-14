let isValidPassword = function (pass) {
    return pass.length > 8 && !pass.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#g'))
console.log(isValidPassword('sgdjhspasswordjfjkh'))
