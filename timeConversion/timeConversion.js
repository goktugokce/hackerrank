function timeConversion(s) {
    const items = s.split(':');
    const timeMark = items[2].slice(2);
    const seconds = items[2].slice(0,2);
    let hour = parseInt(items[0]);
    let output;
    switch (timeMark) {
        case 'PM':
            hour += 12;
            if(hour === 24) {
                hour = '12';
            }
            output = hour + ':' + items[1] + ':' + seconds;
            return output;
    
        case 'AM':
            if(hour === 12) {
                hour = '00'
            }
            else {
                hour = items[0];
            }
            output = hour + ':' + items[1] + ':' + seconds;
            return  output;
    }

}
console.log(timeConversion('04:59:59AM'));
module.exports = timeConversion;