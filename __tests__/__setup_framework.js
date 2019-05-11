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
    <svg id='target-svg' width="100" height="100" viewBox="0 0 100 100">
      <path fill="none" stroke-width="1" stroke="#000" d="M0 0 L0 100" />
    </svg>
  `;

  // reset anime global
  global.anime = anime;
});
