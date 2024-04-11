import generateRandomNumber from '../simple-modules/generateRandomNumber.js';
import playGame from '../index.js';

const gameDescription = 'What is the result of the expression?';
const mapping = {
  '+': (a, b) => `${a + b}`,
  '-': (a, b) => `${a - b}`,
  '*': (a, b) => `${a * b}`,
};

function getDataCalc() {
  const firstOperand = generateRandomNumber();
  const secondOperand = generateRandomNumber();
  const operators = Object.keys(mapping);
  const operator = operators[Math.round(Math.random()) * (operators.length - 1)];
  const currentExpression = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = mapping[operator](firstOperand, secondOperand);
  return { currentExpression, correctAnswer };
}

export default () => {
  playGame(getDataCalc, gameDescription);
};
