import comparingExpressionAnswer from '../index.js';

const determinePrimeNumbers = (number) => {
  let counterDivisors = 0;
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      counterDivisors += 1;
    }
  }
  if (counterDivisors === 2) {
    return 'yes';
  }
  return 'no';
};

const brainPrimeGame = () => {
  const expressions = [];
  const correctAnswers = [];
  let number;
  let rightAnswer;
  for (let j = 1; j <= 3; j += 1) {
    number = Math.floor(Math.random() * 100 + 2);
    rightAnswer = determinePrimeNumbers(number);
    expressions.push(number);
    correctAnswers.push(rightAnswer);
  }
  const mainQuestionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  comparingExpressionAnswer(expressions, correctAnswers, mainQuestionOfGame);
};

export default brainPrimeGame;
