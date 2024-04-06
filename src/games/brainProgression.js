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

function getDataProgression() {
  const gameDescription = 'What number is missing in the progression?';
  const currentExpression = getProgression();
  const resIndex = Math.round(Math.random() * (currentExpression.length - 1));
  const correctAnswer = currentExpression[resIndex];
  currentExpression[resIndex] = '..';
  return { currentExpression, correctAnswer, gameDescription };
}

export default getDataProgression;
