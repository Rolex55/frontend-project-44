import { comparingExpressionAnswer, getRandomNumbers } from '../index.js';

const calculateMaxGcd = (a, b) => {
  let maxNod;
  for (let i = 0; i <= Math.min(a, b); i += 1) {
    if (a % i === 0 && b % i === 0) {
      maxNod = i;
    }
  }
  return maxNod;
};

const returnRandomNumbersAndGcd = () => {
  const maxNumber = 100;
  const [firstNumber, secondNumber] = [
    getRandomNumbers(maxNumber),
    getRandomNumbers(maxNumber),
  ];
  const expression = `${firstNumber} ${secondNumber}`;
  const correctAnswer = calculateMaxGcd(firstNumber, secondNumber).toString();
  return [expression, correctAnswer];
};

const calculatingGcdGame = () => {
  const mainQuestionOfGame = 'Find the greatest common divisor of given numbers.';
  comparingExpressionAnswer(returnRandomNumbersAndGcd, mainQuestionOfGame);
};

export default calculatingGcdGame;
