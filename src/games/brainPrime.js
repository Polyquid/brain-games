import getRandomNumber from '../simple modules/getRandomNumber.js';

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
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const currentExpression = getRandomNumber();
  const correctAnswer = isPrime(currentExpression);
  return { currentExpression, correctAnswer, gameDescription };
}

export default getDataPrime;
