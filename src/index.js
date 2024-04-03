export default function playGame(name, oneGame) {
  for (let i = 0; i < 3; i += 1) {
    if (!oneGame()) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
