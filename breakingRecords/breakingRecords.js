function breakingRecords(scores) {
    let lowCount = 0;
    let highCount = 0;
    let startPoint = scores[0];
    let lowestPoint = startPoint;
    let highestPoint = startPoint;
    scores.map((el) => {
        if(el < lowestPoint) {
            lowCount += 1;
            lowestPoint = el
        }
        else if(el > highestPoint){
            highCount += 1;
            highestPoint = el
        }
    })
    return [highCount, lowCount]
}

module.exports = breakingRecords;