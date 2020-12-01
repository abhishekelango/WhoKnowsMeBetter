var readlineSync = require("readline-sync");

const chalk = require('chalk');

var userName = readlineSync.question(chalk.cyanBright("What is your name? "))

console.log(chalk.yellow("Hello " + chalk.underline.bgBlue.white(userName) + " Welcome to, 'do you know Abhishek? "))

var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score = score + 1;
    console.log(chalk.green("you are right! " + "score is: ") + score)
  } else {
    score = score
    console.log(chalk.red("you are wrong! " + "score is: ") + score)

  }
  console.log("-----------------------------")
}



var ques = [{ question: "What is my Fav Colour? (hint:yellow, pink) ", answer: "yellow" },

{ question: "Is Gangs of Wasseyur my Favourite Movie? ", answer: "yes" },
{
  question: "Do i like Dogs? ",
  answer: "yes"
},
{ question: "Am i a Chai person or a Coffee person? ", answer: "Both" },
]

for (var i = 0; i < ques.length; i++) {
  var questionSet = ques[i]
  play(questionSet.question, questionSet.answer);
}

totalScore = score;
console.log(chalk.green(chalk.white(userName) + ",Your Total Score is: " + chalk.yellow(score)))

console.log("--------------------")
 console.log("The HighSCores are :");
var highScore = [{
  player: "Vasan :",
  score: "4"
},
{
  player: "Zaidu :",
  score: "3"
},]

for (var i = 0; i < highScore.length; i++) {
 var scoreboard = highScore[i];

  console.log(chalk.yellow(scoreboard.player, scoreboard.score))
 
}
 console.log("--------------------")

var newScore = "4"

 if(newScore === totalScore){
   console.log("Congratulations You Have Made A New Record! ")
 }else {
   console.log("Thanks for Participating in this Quiz! ")
 }