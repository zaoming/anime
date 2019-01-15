const anime = require('../src');

console.log(anime);

describe('Anime exports', () => {
  test('anime should be defined', () => {
    expect(anime).toBeDefined();
  });
});
