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

const generatingRandomNumber = () => {
  const number = Math.floor(Math.random() * 100 + 2);
  const correctAnswer = determinePrimeNumbers(number);
  return [number, correctAnswer];
};

const isPrimeNumberGame = () => {
  const mainQuestionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  comparingExpressionAnswer(generatingRandomNumber, mainQuestionOfGame);
};

export default isPrimeNumberGame;
