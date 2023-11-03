#!/usr/bin/env node
import readlineSync from "readline-sync";

let correctAnswer;
let flag = true;
let counter = 1;
let number;
console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name? ");
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
while (counter <= 3) {
  number = Math.floor(Math.random() * 100);
  if (number % 2 === 0) {
    correctAnswer = "yes";
  } else {
    correctAnswer = "no";
  }
  console.log(`Question: ${number}`);
  const answer = readlineSync.question("Your answer: ");
  if (answer === correctAnswer) {
    console.log("Correct!");
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
    );
    flag = false;
    break;
  }
  counter += 1;
}

if (flag === true) {
  console.log(`Congratulations, ${name}!`);
}
