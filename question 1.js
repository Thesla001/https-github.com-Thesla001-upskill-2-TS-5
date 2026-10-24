let firstName = "Joshua";
let lastName = "Onyewuchi";
let mathematicsScore = 25;
let englishScore = 20;
let computerScore = 30;
//Calculate the totla score
let totalScore = mathematicsScore + englishScore + computerScore;
//Determine the student's remark 
let remark;
if (totalScore >= 70) {
    remark = "Excellent";
} else if (totalScore >= 50 && totalScore <= 69) {
    remark = "Good";
} else if (totalScore >= 35 && totalScore <= 49) {
    remark = "you can do better"; 
} else {
    remark = "Fail";
}
//Examination result
console.log("STUDENT EXAMINATION RESULT");
console.log("FULL NAME: " + firstName + " " + lastName);
console.log("Mathematics: " + mathematicsScore);
console.log("Computer Studies: " + computerScore);
console.log("Total Score: " + totalScore);
console.log("Remark: " + remark);

 