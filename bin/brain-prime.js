#!/usr/bin/env node
import oneGame from '../src/games/brain-prime.js';
import greeting from '../src/cli.js';
import game from '../src/index.js';

const name = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
game(name, oneGame);
