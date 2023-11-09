import { comparingExpressionAnswer, getRandomNumbers } from '../index.js';

const isEvenNumber = (number) => number % 2 === 0;

const returnRandomNumberAndCorrectAnswer = () => {
  const maxNumber = 100;
  const number = getRandomNumbers(maxNumber);
  const correctAnswer = isEvenNumber(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const launchIsEvenNumberGame = () => {
  const mainQuestionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  comparingExpressionAnswer(
    returnRandomNumberAndCorrectAnswer,
    mainQuestionOfGame,
  );
};

export default launchIsEvenNumberGame;
