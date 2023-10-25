function miniMaxSum(arr) {
    arr = arr.sort();
    let sum_min = 0;
    let sum_max = 0;
    for( let i = 0; i < arr.length - 1; i ++) {
        sum_min += arr[i]
    }
    for( let i = 1; i < arr.length; i ++) {
        sum_max += arr[i]
    }
    return([sum_min, sum_max]);
}

module.exports = miniMaxSum;