import readlineSync from 'readline-sync';

const comparingExpressionAnswer = (generatingFunction, mainQuestionOfGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${mainQuestionOfGame}`);
  let counter = 0;
  while (counter < 3) {
    const [expression, correctAnswer] = generatingFunction();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`,
      );
      break;
    }
    console.log('Correct!');
    counter += 1;
  }
  if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default comparingExpressionAnswer;
