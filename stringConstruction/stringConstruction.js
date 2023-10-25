function stringConstruction(s) {
    let count = 0;
    let p = '';
    for(let char of s){
        if(p.includes(char)) {
            continue;
        }
        else{
            p += char
            count += 1;
        }
    }
    return count;
}

module.exports = stringConstruction;