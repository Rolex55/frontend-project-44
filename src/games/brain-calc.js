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

const generatingRandomExpression = () => {
  const operators = ['+', '-', '*'];
  const [firstNumber, secondNumber, indexOperators] = [
    Math.floor(Math.random() * 50),
    Math.floor(Math.random() * 50),
    Math.floor(Math.random() * 3),
  ];
  const expression = `${firstNumber} ${operators[indexOperators]} ${secondNumber}`;
  const resultOfExpression = calculationByOperator(
    firstNumber,
    secondNumber,
    operators[indexOperators],
  );
  const correctAnswer = resultOfExpression.toString();
  return [expression, correctAnswer];
};
const calculatingExpressionGame = () => {
  const mainQuestionOfGame = 'What is the result of the expression?';
  comparingExpressionAnswer(generatingRandomExpression, mainQuestionOfGame);
};

export default calculatingExpressionGame;
