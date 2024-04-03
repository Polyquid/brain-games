#!/usr/bin/env node
import oneGame from '../src/games/brain-progression.js';
import greeting from '../src/cli.js';
import game from '../src/index.js';

const name = greeting();
console.log('What number is missing in the progression?');
game(name, oneGame);
