function gradingStudents(grades) {
    let finalGrades = [];
    for(const item of grades) {
        if(item % 5 >= 3) {
            if(item >= 38){
                finalGrades.push(item + 5 - (item % 5));
            }
            else{
                finalGrades.push(item);
            }
        }
        else{
            finalGrades.push(item);
        }
    }
    return finalGrades;
}

module.exports = gradingStudents;