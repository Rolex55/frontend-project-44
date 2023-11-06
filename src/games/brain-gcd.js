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

const brainGcdGame = () => {
  const expressions = [];
  const correctAnswers = [];
  for (let j = 1; j <= 3; j += 1) {
    const [firstNumber, secondNumber] = [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ];
    expressions.push(`${firstNumber} ${secondNumber}`);
    const correctAnswer = calculationNod(firstNumber, secondNumber);
    correctAnswers.push(correctAnswer.toString());
  }
  const mainQuestionOfGame = 'Find the greatest common divisor of given numbers.';
  comparingExpressionAnswer(expressions, correctAnswers, mainQuestionOfGame);
};

export default brainGcdGame;
