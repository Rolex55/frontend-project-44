#!/usr/bin/env node
import readlineSync from 'readline-sync';

const numbers = [15, 7, 6];
let correctAnswer;
let flag = true;
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (const number of numbers) {
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    flag = false;
    break;
  }
}

if (flag === true) {
  console.log(`Congratulations, ${name}!`);
}
