function birthdayCakeCandles(candles) {
    const max = Math.max(...candles);
    let count = 0;
    for(let item of candles){
        if(item === max) 
        count += 1;
    }
    
    return count;
}

module.exports = birthdayCakeCandles;
