import comparingExpressionAnswer from '../index.js';

const gettingProgressionWithHiddenNumber = () => {
  const startNumber = Math.floor(Math.random() * 20);
  const step = Math.floor(Math.random() * 10 + 1);
  let progression = [];
  let number;
  for (let i = 0; i < 10; i += 1) {
    number = startNumber + step * i;
    progression.push(number);
  }
  const hiddenIndex = Math.floor(Math.random() * 10);
  const hiddenNumber = progression.splice(hiddenIndex, 1, '..');
  progression = progression.join(' ');
  return [progression, hiddenNumber];
};

const brainProgressionGame = () => {
  const expressions = [];
  const correctAnswers = [];
  let progression;
  let hiddenNumber;
  for (let j = 1; j <= 3; j += 1) {
    [progression, hiddenNumber] = gettingProgressionWithHiddenNumber();
    expressions.push(progression);
    correctAnswers.push(hiddenNumber.toString());
  }
  const mainQuestionOfGame = 'What number is missing in the progression?';
  comparingExpressionAnswer(expressions, correctAnswers, mainQuestionOfGame);
};

export default brainProgressionGame;
