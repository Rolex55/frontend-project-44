import comparingExpressionAnswer from '../index.js';

const calculationNod = (a, b) => {
  let maxNod;
  for (let i = 0; i <= Math.min(a, b); i += 1) {
    if (a % i === 0 && b % i === 0) {
      maxNod = i;
    }
  }
  return maxNod;
};

const generatingRandomNumbersAndGcd = () => {
  const [firstNumber, secondNumber] = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
  ];
  const expression = `${firstNumber} ${secondNumber}`;
  const correctAnswer = calculationNod(firstNumber, secondNumber).toString();
  return [expression, correctAnswer];
};

const calculatingGcdGame = () => {
  const mainQuestionOfGame = 'Find the greatest common divisor of given numbers.';
  comparingExpressionAnswer(generatingRandomNumbersAndGcd, mainQuestionOfGame);
};

export default calculatingGcdGame;
