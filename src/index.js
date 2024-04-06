import greeting from './cli.js';
import getAnswer from './simple modules/getAnswer.js';
import getDataCalc from './games/brainCalc.js';
import getDataEven from './games/brainEven.js';
import getDataGcd from './games/brainGcd.js';
import getDataPrime from './games/brainPrime.js';
import getDataProgression from './games/brainProgression.js';

const mapping = {
  brainCalc: () => getDataCalc(),
  brainEven: () => getDataEven(),
  brainGcd: () => getDataGcd(),
  brainPrime: () => getDataPrime(),
  brainProgression: () => getDataProgression(),
};

export default function playGame(nameOfGame) {
  const name = greeting();
  const countOfRounds = 3;
  let isWin = true;
  const dataGame = mapping[nameOfGame]();
  const { gameDescription } = dataGame;
  console.log(gameDescription);
  for (let i = 0; i < countOfRounds; i += 1) {
    const { currentExpression, correctAnswer } = mapping[nameOfGame]();
    console.log(`Question: ${currentExpression}`, correctAnswer);
    const currentAnswer = getAnswer();
    if (currentAnswer === correctAnswer) {
      console.log('Correct !');
    } else {
      console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      isWin = false;
      break;
    }
  }
  if (isWin) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}
