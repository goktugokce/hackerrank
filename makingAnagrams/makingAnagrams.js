function makingAnagrams(s1, s2) {
    let tempS1 = s1;
    let tempS2 = s2;
    s1.split("").forEach((el) => {
        if (tempS2.includes(el)) {
            tempS2 = tempS2.replace(el, 1);
        }
    });
    
    s2.split("").forEach((el) => {
        if (tempS1.includes(el)) {
            tempS1 = tempS1.replace(el, 1);
        }
    })

    return tempS1.split('').filter(el => el !== '1').length + tempS2.split('').filter(el => el !== '1').length;
}

module.exports = makingAnagrams;