import comparingExpressionAnswer from '../index.js';

const brainEvenGame = () => {
  const mainQuestionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const expressions = [];
  const correctAnswers = [];
  for (let i = 1; i <= 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    expressions.push(number);
    number % 2 === 0 ? correctAnswers.push('yes') : correctAnswers.push('no');
  }
  comparingExpressionAnswer(expressions, correctAnswers, mainQuestionOfGame);
};

export default brainEvenGame;
