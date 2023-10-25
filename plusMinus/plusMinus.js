function plusMinus(arr) {
    let negative = 0;
    let positive = 0;
    let zero = 0;
    arr.filter((el) => {
        if(el > 0) {
            positive +=1;
        }
        else if(el < 0){
            negative += 1;
        }
        else {
            zero += 1;
        }
    })
    
    return([(positive/arr.length).toFixed(6), (negative/arr.length).toFixed(6), (zero/arr.length).toFixed(6)]);
}

module.exports = plusMinus;