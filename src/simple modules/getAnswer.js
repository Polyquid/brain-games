import readlineSync from 'readline-sync';

export default function getAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}
