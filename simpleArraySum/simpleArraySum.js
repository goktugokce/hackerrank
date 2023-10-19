function simpleArraySum(ar) {
    let sum = 0
    ar.map((el) => sum = sum + el);
    return sum
}

module.exports = simpleArraySum;