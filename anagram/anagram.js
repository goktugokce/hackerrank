function anagram(s) {
    let arraySize = s.length;
    
    if(arraySize % 2 !== 0) {
        return -1
    }
    let firstHalf = s.slice(0, arraySize/2);
    let secondHalf = s.slice(arraySize/2);
    
    secondHalf.split("").forEach((el) => {
        if (firstHalf.includes(el)) {
            firstHalf = firstHalf.replace(el, 1);
        }
    });

    return firstHalf.split('').filter(el => el !== '1').length;
}

module.exports = anagram;