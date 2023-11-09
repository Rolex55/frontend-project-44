import readlineSync from 'readline-sync';

export const getRandomNumbers = (maxNumber, minNumber = 0) => {
  const randomNumber = Math.floor(
    Math.random() * (maxNumber - minNumber) + minNumber,
  );
  return randomNumber;
};

export const comparingExpressionAnswer = (
  generatingFunction,
  mainQuestionOfGame,
) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${mainQuestionOfGame}`);
  for (let i = 0; i < 3; i += 1) {
    const [expression, correctAnswer] = generatingFunction();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      return console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`,
      );
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};
