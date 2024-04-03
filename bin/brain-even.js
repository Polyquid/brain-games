#!/usr/bin/env node
import brainEven from '../src/games/brainEven.js';
import greeting from '../src/cli.js';
import game from '../src/index.js';

const userName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
game(userName, brainEven);
