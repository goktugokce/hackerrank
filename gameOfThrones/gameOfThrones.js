function gameOfThrones(s) {
    const map = {};
    for (const char of s) {
        if (map[char]) {
            map[char] += 1;
        }
        else {
            map[char] = 1;
        }
    }
    let odds = 0;
    for (const count of Object.values(map)) {
        if (count % 2 !== 0) {
            odds++;
        }
        if (odds > 1) {
            return 'NO';
        }
    }
    
    return 'YES';
}

module.exports = gameOfThrones;