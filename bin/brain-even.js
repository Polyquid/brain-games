#!/usr/bin/env node
import brainEven from '../src/brain-even.js';
import greeting from '../src/cli.js';

const name = greeting();
brainEven(name);
