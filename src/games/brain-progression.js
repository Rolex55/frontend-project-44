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
  const hiddenNumber = progression.splice(hiddenIndex, 1, '..').toString();
  progression = progression.join(' ');
  return [progression, hiddenNumber];
};

const guessMissingNumberinProgressionGame = () => {
  const mainQuestionOfGame = 'What number is missing in the progression?';
  comparingExpressionAnswer(
    gettingProgressionWithHiddenNumber,
    mainQuestionOfGame,
  );
};

export default guessMissingNumberinProgressionGame;
