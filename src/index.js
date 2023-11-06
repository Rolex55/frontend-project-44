import readlineSync from 'readline-sync';

const comparingExpressionAnswer = (
  expressions,
  correctAnswers,
  mainQuestionOfGame,
) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${mainQuestionOfGame}`);
  let flag = true;
  for (let i = 0; i < expressions.length; i += 1) {
    console.log(`Question: ${expressions[i]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswers[i]) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswers[i]}'.\nLet's try again, ${name}!`,
      );
      flag = false;
      break;
    }
    console.log('Correct!');
  }
  if (flag === true) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default comparingExpressionAnswer;
