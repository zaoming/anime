require('jest-dom/extend-expect');

const anime = require('../src').default;

describe('Anime exports', () => {
  test('anime should be defined', () => {
    expect(anime).toBeDefined();
    expect(typeof anime).toBe('function');
    expect(anime.version).toBeDefined();
    expect(anime.speed).toBe(1);
    expect(anime.remove).toBeDefined();
    expect(anime.get).toBeDefined();
    expect(anime.convertPx).toBeDefined();
    expect(anime.path).toBeDefined();
    expect(anime.setDashoffset).toBeDefined();
    expect(anime.stagger).toBeDefined();
    expect(anime.timeline).toBeDefined();
    expect(anime.easing).toBeDefined();
    expect(anime.penner).toBeDefined();
    expect(anime.random).toBeDefined();
  });
});
