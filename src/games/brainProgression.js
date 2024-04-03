import getAnswer from '../simple modules/getAnswer.js';
import getRandomNumber from '../simple modules/getRandomNumber.js';

function getProgression() {
  const firstItem = getRandomNumber();
  const iteration = getRandomNumber();
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    const currentNumber = firstItem + iteration * i;
    result.push(`${currentNumber}`);
  }
  return result;
}

function brainProgression() {
  const currentExpression = getProgression();
  const resIndex = Math.round(Math.random() * (currentExpression.length - 1));
  const correctAnswer = currentExpression[resIndex];
  currentExpression[resIndex] = '..';
  console.log(`Question: ${currentExpression.join(' ')}`);
  const currentAnswer = getAnswer();
  const isTrueAnswer = correctAnswer === currentAnswer;
  if (isTrueAnswer) {
    console.log('Correct !');
  } else {
    console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  return isTrueAnswer;
}

export default brainProgression;
