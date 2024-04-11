import greeting from './cli.js';
import getAnswer from './simple-modules/getAnswer.js';

const countOfRounds = 3;
const name = greeting();

export default function playGame(getDataGame, gameDescription) {
  console.log(gameDescription);
  for (let i = 0; i < countOfRounds; i += 1) {
    const { currentExpression, correctAnswer } = getDataGame();
    console.log(`Question: ${currentExpression} ${correctAnswer}`);
    const currentAnswer = getAnswer();
    if (currentAnswer === correctAnswer) {
      console.log('Correct !');
    } else {
      console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
