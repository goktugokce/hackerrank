function aVeryBigSum(ar) {
    const sumWithInitial = ar.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sumWithInitial;
}
module.exports = aVeryBigSum;