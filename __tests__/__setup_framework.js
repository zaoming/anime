require('jest-dom/extend-expect');
require('jest-extended');

// configure anime globals
global.anime = require('../src');

// prepare template for testing
const targetA = document.createElement('div');
const targetB = document.createElement('div');
const targetC = document.createElement('div');
const targetD = document.createElement('div');

targetA.className = 'target';
targetB.className = 'target';
targetC.id = 'target';

document.body.appendChild(targetA);
document.body.appendChild(targetB);
document.body.appendChild(targetC);
document.body.appendChild(targetD);

// resets style between each test
beforeEach(() => {
  const targets = [...document.getElementsByTagName('div')];

  targets.forEach(target => {
    target.removeAttribute('style');
  });
});
