import getAnswer from '../simple modules/getAnswer.js';
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

function brainPrime() {
  const currentNumber = getRandomNumber();
  const correctAnswer = isPrime(currentNumber);
  console.log(`Question: ${currentNumber}`);
  const currentAnswer = getAnswer();
  const isTrueAnswer = currentAnswer === correctAnswer;
  if (isTrueAnswer) {
    console.log('Correct !');
  } else {
    console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  return isTrueAnswer;
}

export default brainPrime;
