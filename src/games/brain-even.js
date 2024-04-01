import getAnswer from '../simple modules/getAnswer.js';
import getRandomNumber from '../simple modules/getRandomNumber.js';

function checkAnswer(answer, number) {
  let result = null;
  const numberIsEven = number % 2 === 0;
  if (numberIsEven) {
    result = answer === 'yes';
  } else {
    result = answer === 'no';
  }
  return result;
}

function oneGame() {
  const currentNumber = getRandomNumber();
  console.log(`Question: ${currentNumber}`);
  const currentAnswer = getAnswer();
  const answerIsTrue = checkAnswer(currentAnswer, currentNumber);
  let isOK;
  if (answerIsTrue) {
    console.log('Correct!');
    isOK = true;
  } else {
    console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${currentNumber % 2 === 0 ? 'yes' : 'no'}'.`);
    isOK = false;
  }
  return isOK;
}

export default oneGame;
