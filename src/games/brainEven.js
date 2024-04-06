import getRandomNumber from '../simple modules/getRandomNumber.js';

function getDataEven() {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const currentExpression = getRandomNumber();
  const correctAnswer = currentExpression % 2 === 0 ? 'yes' : 'no';
  return { currentExpression, correctAnswer, gameDescription };
}

export default getDataEven;
