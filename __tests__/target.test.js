require('jest-dom/extend-expect');

const anime = require('../src').default;

describe('target', () => {
  test('1=1', () => {
    expect(1).toBe(1);
  });
});
