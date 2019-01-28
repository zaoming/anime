describe('SVG', () => {
  test('MOTION PATH', () => {
    const target = {
      x: 0,
      y: 0,
      angle: 0
    };

    var path = anime.path('#target-svg');

    const animation = anime({
      targets: target,
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 100,
      autoplay: false,
      loop: false
    });

    animation.seek(500);

    console.log(target);
  });
});
