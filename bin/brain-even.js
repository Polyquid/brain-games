#!/usr/bin/env node
import oneGame from '../src/games/brain-even.js';
import greeting from '../src/cli.js';
import game from '../src/index.js';

const name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
game(name, oneGame);
