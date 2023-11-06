import comparingExpressionAnswer from '../index.js';

const calculationByOperator = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};
const brainCalcGame = () => {
  const operators = ['+', '-', '*'];
  const expressions = [];
  const correctAnswers = [];
  for (let i = 1; i <= 3; i += 1) {
    const [firstNumber, secondNumber, indexOperators] = [
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 3),
    ];
    expressions.push(
      `${firstNumber} ${operators[indexOperators]} ${secondNumber}`,
    );
    const rightAnswer = calculationByOperator(
      firstNumber,
      secondNumber,
      operators[indexOperators],
    );
    correctAnswers.push(rightAnswer.toString());
  }
  const mainQuestionOfGame = 'What is the result of the expression?';
  comparingExpressionAnswer(expressions, correctAnswers, mainQuestionOfGame);
};

export default brainCalcGame;
