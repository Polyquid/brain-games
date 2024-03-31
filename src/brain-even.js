import readlineSync from 'readline-sync';

function getRandomNumber() {
  return Math.round(Math.random() * 15);
}

function getAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

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
  let isOK = null;
  const answerIsTrue = checkAnswer(currentAnswer, currentNumber);
  if (answerIsTrue) {
    console.log('Correct!');
    isOK = true;
  } else {
    console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${currentNumber % 2 === 0 ? 'yes' : 'no'}'.`);
    isOK = false;
  }
  return isOK;
}

function brainEven(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    if (!oneGame()) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export default brainEven;
