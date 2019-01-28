require('jest-dom/extend-expect');
require('jest-extended');

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

// adds an SVG document with path
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
const p = document.createElementNS(svg.namespaceURI, 'path');
p.setAttribute('d', 'M0 0 L100 100');
svg.appendChild(p);
svg.id = 'target-svg';

document.body.appendChild(svg);

// resets style between each test
beforeEach(() => {
  const targets = [...document.getElementsByTagName('div')];

  targets.forEach(target => {
    target.removeAttribute('style');
  });

  // configure anime globals
  global.anime = require('../src');
});
