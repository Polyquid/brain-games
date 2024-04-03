#!/usr/bin/env node
import brainProgression from '../src/games/brainProgression.js';
import greeting from '../src/cli.js';
import game from '../src/index.js';

const userName = greeting();
console.log('What number is missing in the progression?');
game(userName, brainProgression);
