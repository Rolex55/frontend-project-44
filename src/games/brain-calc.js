import { comparingExpressionAnswer, getRandomNumbers } from '../index.js';

const calculateExpressionDependsOnOperator = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generatingRandomExpression = () => {
  const operators = ['+', '-', '*'];
  const maxNumber = 50;
  const [firstNumber, secondNumber, indexOperators] = [
    getRandomNumbers(maxNumber),
    getRandomNumbers(maxNumber),
    getRandomNumbers(operators.length),
  ];
  const expression = `${firstNumber} ${operators[indexOperators]} ${secondNumber}`;
  const resultOfExpression = calculateExpressionDependsOnOperator(
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
