#!/usr/bin/env node
import brainPrime from '../src/games/brainPrime.js';
import greeting from '../src/cli.js';
import game from '../src/index.js';

const userName = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
game(userName, brainPrime);
