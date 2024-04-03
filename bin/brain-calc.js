#!/usr/bin/env node
import brainCalc from '../src/games/brainCalc.js';
import greeting from '../src/cli.js';
import game from '../src/index.js';

const userName = greeting();
console.log('What is the result of the expression?');
game(userName, brainCalc);
