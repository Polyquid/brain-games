import getAnswer from '../simple modules/getAnswer.js';
import getRandomNumber from '../simple modules/getRandomNumber.js';

const mapping = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function checkAnswer(correctAnswer, currentAnswer) {
  let result;
  if (correctAnswer === currentAnswer) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function oneGame() {
  const firstOperand = getRandomNumber();
  const operators = Object.keys(mapping);
  const operator = operators[Math.round(Math.random()) * (operators.length - 1)];
  const secondOperand = getRandomNumber();
  const currentExpression = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = mapping[operator](firstOperand, secondOperand);
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

export default oneGame;
