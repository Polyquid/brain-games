import generateRandomNumber from '../simple-modules/generateRandomNumber.js';
import playGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

function createProgression() {
  const firstItem = generateRandomNumber();
  const iteration = generateRandomNumber();
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    const currentNumber = firstItem + iteration * i;
    result.push(`${currentNumber}`);
  }
  return result;
}

function getDataProgression() {
  let currentExpression = createProgression();
  const resIndex = Math.round(Math.random() * (currentExpression.length - 1));
  const correctAnswer = currentExpression[resIndex];
  currentExpression[resIndex] = '..';
  currentExpression = currentExpression.join(' ');
  return { currentExpression, correctAnswer };
}

export default () => {
  playGame(getDataProgression, gameDescription);
};
