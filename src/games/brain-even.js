import comparingExpressionAnswer from '../index.js';

const generatingRandomNumber = () => {
  const number = Math.floor(Math.random() * 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};

const isEvenGame = () => {
  const mainQuestionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  comparingExpressionAnswer(generatingRandomNumber, mainQuestionOfGame);
};

export default isEvenGame;
