function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let orangeCounter = 0;
    let appleCounter = 0;
    let point;
    apples.map((item) => {
        point = item + a;
        if(point >= s && point <= t){
            appleCounter += 1;
        }
    })
    oranges.map((item) => {
        point = item + b;
        if(point >= s && point <= t){
            orangeCounter += 1;
        }
    })
    return([appleCounter,orangeCounter])
}

module.exports = countApplesAndOranges;