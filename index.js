

var readLineSync = require('readline-sync');

var userName = readLineSync.question("what is your name ");

var score = 0

console.log("Welcome "+userName+ " to Do you know me(Ankit)?");

console.log("Let's begin")

var questions = [{
  question: "In which city does Ankit live?  ",
  answer: "Lucknow"
}, {
  question: "Which company does Ankit work?  ",
  answer: "NEC"
},
{
  question: "Which sport does ankit love?  ",
  answer: "Cricket"
}];

function play(question, answer){
 var userResponse =readLineSync.question(question);
 
  if(userResponse.toUpperCase() === answer.toUpperCase()){
    console.log("correct answer");
    score = score+ 10;
    
  } else{
    console.log("Incorrect answer");
    console.log("correct answer is: " +answer);
  }  
  console.log("your current score is "+ score);
};


for(i=0; i <questions.length;i++) {
  play(questions[i].question,questions[i].answer);
}

console.log("Quiz Ends");
console.log("Your Final Score is " + score );
  