#!/usr/bin/env node
import oneGame from '../src/games/brain-calc.js';
import greeting from '../src/cli.js';
import game from '../src/index.js';

const name = greeting();
game(name, oneGame);
