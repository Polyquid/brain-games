import generateRandomNumber from '../simple-modules/generateRandomNumber.js';
import playGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

function getCorrectAnswer(a, b) {
  if (a < b) return getCorrectAnswer(b, a);
  if (a % b === 0) return `${b}`;
  return getCorrectAnswer(b, a % b);
}

function getDataGcd() {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const currentExpression = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getCorrectAnswer(firstNumber, secondNumber);
  return { currentExpression, correctAnswer };
}

export default () => {
  playGame(getDataGcd, gameDescription);
};
