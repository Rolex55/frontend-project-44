import { comparingExpressionAnswer, getRandomNumbers } from '../index.js';

const getProgression = (startNumber, step) => {
  const progression = [];
  let number;
  for (let i = 0; i < 10; i += 1) {
    number = startNumber + step * i;
    progression.push(number);
  }
  return progression;
};
const getProgressionWithHiddenNumber = () => {
  const [maxStartNumber, maxStep, minStep, maxHiddenIndex] = [20, 10, 1, 10];
  const startNumber = getRandomNumbers(maxStartNumber);
  const step = getRandomNumbers(maxStep, minStep);
  let progression = getProgression(startNumber, step);
  const hiddenIndex = getRandomNumbers(maxHiddenIndex);
  const hiddenNumber = progression.splice(hiddenIndex, 1, '..').toString();
  progression = progression.join(' ');
  return [progression, hiddenNumber];
};

const guessMissingNumberinProgressionGame = () => {
  const mainQuestionOfGame = 'What number is missing in the progression?';
  comparingExpressionAnswer(getProgressionWithHiddenNumber, mainQuestionOfGame);
};

export default guessMissingNumberinProgressionGame;
