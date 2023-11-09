import { comparingExpressionAnswer, getRandomNumbers } from '../index.js';

const isPrimeNumber = (number) => {
  let counterDivisors = 0;
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      counterDivisors += 1;
    }
  }
  return counterDivisors === 2;
};

const returnRandomNumberAndCorrectAnswer = () => {
  const [maxNumber, minNumber] = [100, 2];
  const number = getRandomNumbers(maxNumber, minNumber);
  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const launchIsPrimeNumberGame = () => {
  const mainQuestionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  comparingExpressionAnswer(
    returnRandomNumberAndCorrectAnswer,
    mainQuestionOfGame,
  );
};

export default launchIsPrimeNumberGame;
