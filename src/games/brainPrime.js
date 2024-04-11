import generateRandomNumber from '../simple-modules/generateRandomNumber.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  let res = 'yes';
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      res = 'no';
      break;
    }
  }
  return res;
}

function getDataPrime() {
  const currentExpression = generateRandomNumber();
  const correctAnswer = isPrime(currentExpression);
  return { currentExpression, correctAnswer };
}

export default () => {
  playGame(getDataPrime, gameDescription);
};
