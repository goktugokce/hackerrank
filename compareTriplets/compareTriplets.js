function compareTriplets(a, b) {
    let resultArray = [0,0];
    for(let i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
            resultArray[0] += 1
        }
        else if(a[i] < b[i]) {
            resultArray[1] += 1
        }
    }
    return resultArray;
}
module.exports = compareTriplets;