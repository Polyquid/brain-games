import getRandomNumber from '../simple modules/getRandomNumber.js';

const mapping = {
  '+': (a, b) => `${a + b}`,
  '-': (a, b) => `${a - b}`,
  '*': (a, b) => `${a * b}`,
};

function getDataCalc() {
  const gameDescription = 'What is the result of the expression?';
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const operators = Object.keys(mapping);
  const operator = operators[Math.round(Math.random()) * (operators.length - 1)];
  const currentExpression = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = mapping[operator](firstOperand, secondOperand);
  return { currentExpression, correctAnswer, gameDescription };
}

export default getDataCalc;
