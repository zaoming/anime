describe('SVG', () => {
  test('MOTION PATH', () => {
    const target = {
      x: 0,
      y: 0,
      angle: 0
    };

    const path = document.querySelector('#target-svg path');
    const getPathAttr = anime.path(path);

    const animation = anime({
      targets: target,
      x: getPathAttr('x'),
      y: getPathAttr('y'),
      angle: getPathAttr('angle'),
      easing: 'linear',
      duration: 100,
      autoplay: false,
      loop: false
    });

    animation.seek(50);

    expect(target.x).toBeCloseTo(70, 0);
    expect(target.x).toBeCloseTo(70, 0);
    expect(target.angle).toBe(45);
  });
});
