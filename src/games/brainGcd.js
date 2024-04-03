import getAnswer from '../simple modules/getAnswer.js';
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
  return result;
}

function checkAnswer(correctAnswer, currentAnswer) {
  let result;
  if (correctAnswer === currentAnswer) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function brainGcd() {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const currentExpression = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getCorrectAnswer(firstNumber, secondNumber);
  console.log(`Question: ${currentExpression}`);
  const currentAnswer = getAnswer();
  const isTrueAnswer = checkAnswer(correctAnswer, +currentAnswer);
  if (isTrueAnswer) {
    console.log('Correct !');
  } else {
    console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  return isTrueAnswer;
}

export default brainGcd;
