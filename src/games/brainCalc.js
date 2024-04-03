import getAnswer from '../simple modules/getAnswer.js';
import getRandomNumber from '../simple modules/getRandomNumber.js';

const mapping = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function brainCalc() {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const operators = Object.keys(mapping);
  const operator = operators[Math.round(Math.random()) * (operators.length - 1)];
  const currentExpression = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = mapping[operator](firstOperand, secondOperand);
  console.log(`Question: ${currentExpression}`);
  const currentAnswer = getAnswer();
  const isTrueAnswer = correctAnswer === +currentAnswer;
  if (isTrueAnswer) {
    console.log('Correct !');
  } else {
    console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  return isTrueAnswer;
}

export default brainCalc;
