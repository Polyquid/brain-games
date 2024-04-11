import generateRandomNumber from '../simple-modules/generateRandomNumber.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

function getDataEven() {
  const currentExpression = generateRandomNumber();
  const correctAnswer = currentExpression % 2 === 0 ? 'yes' : 'no';
  return { currentExpression, correctAnswer };
}

export default () => {
  playGame(getDataEven, gameDescription);
};
