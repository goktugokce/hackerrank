function diagonalDifference(arr) {
    let rightToLeft = 0;
    let leftToRight = 0;
    let size = arr.length;
    for(let i = 0 ; i < size ; i++) {
        leftToRight += arr[i][i];
        rightToLeft += arr[i][size - i - 1];
    }
    let result = Math.abs(rightToLeft - leftToRight);
    return result;
}

module.exports = diagonalDifference;