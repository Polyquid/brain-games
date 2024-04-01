#!/usr/bin/env node
import oneGame from '../src/games/brain-calc.js';
import greeting from '../src/cli.js';
import game from '../src/index.js';

const name = greeting();
console.log('What is the result of the expression?');
game(name, oneGame);
