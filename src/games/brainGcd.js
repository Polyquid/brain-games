import getRandomNumber from '../simple modules/getRandomNumber.js';

function getCorrectAnswer(a, b) {
  let maxNumber;
  let minNumber;
  if (a > b) {
    maxNumber = a;
    minNumber = b;
  } else {
    maxNumber = b;
    minNumber = a;
  }
  let isNotFinish = true;
  let result;
  while (isNotFinish) {
    const remain = maxNumber % minNumber;
    if (remain === 0) {
      result = minNumber;
      isNotFinish = false;
    } else {
      maxNumber = minNumber;
      minNumber = remain;
    }
  }
  return `${result}`;
}

function getDataGcd() {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const currentExpression = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getCorrectAnswer(firstNumber, secondNumber);
  return { currentExpression, correctAnswer, gameDescription };
}

export default getDataGcd;
