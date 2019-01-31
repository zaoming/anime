require('jest-extended');

const anime = require('../src');

beforeEach(() => {
  // prepare template for testing
  document.body.innerHTML = `
    <!-- DIV targets -->
    <div class='target'></div>
    <div class='target'></div>
    <div id='target'></div>

    <!-- SVG -->
    <svg id='target-svg' width="128" height="128" viewBox="0 0 128 128">
      <path fill="none" stroke-width="1" d="M0 0 L100 100" />
    </svg>
  `;

  // reset anime global
  global.anime = anime;
});
