import getAnswer from '../simple modules/getAnswer.js';
import getRandomNumber from '../simple modules/getRandomNumber.js';

function brainEven() {
  const currentNumber = getRandomNumber();
  console.log(`Question: ${currentNumber}`);
  const correctAnswer = currentNumber % 2 === 0 ? 'yes' : 'no';
  const currentAnswer = getAnswer();
  const isTrueAnswer = correctAnswer === currentAnswer;
  if (isTrueAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  return isTrueAnswer;
}

export default brainEven;
