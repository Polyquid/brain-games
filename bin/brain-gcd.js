#!/usr/bin/env node
import brainGcd from '../src/games/brainGcd.js';
import greeting from '../src/cli.js';
import game from '../src/index.js';

const userName = greeting();
console.log('Find the greatest common divisor of given numbers.');
game(userName, brainGcd);
