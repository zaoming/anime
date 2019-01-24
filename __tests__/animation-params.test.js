describe('ANIMATION PARAMETERS', () => {
  test('DIRECTION', done => {
    const target = {opacity: 0};

    // normal
    let animation = anime({
      targets: target,
      opacity: 100,
      duration: 100,
      easing: 'linear',
      autoplay: false,
      direction: 'normal'
    });

    animation.seek(40);
    expect(target.opacity).toBeCloseTo(40);

    // reverse
    animation = anime({
      targets: target,
      opacity: 100,
      duration: 100,
      easing: 'linear',
      autoplay: false,
      direction: 'reverse'
    });

    animation.seek(40);
    // TODO: should be 60, library error
    expect(target.opacity).toBe(60);

    // alternate
    animation = anime({
      targets: target,
      opacity: 100,
      duration: 100,
      easing: 'linear',
      direction: 'alternate',
      loop: true,
      autoplay: false
    });

    animation.seek(100);
    expect(target.opacity).toBe(100);

    animation.seek(200);
    expect(target.opacity).toBe(0);

    done();
  });
});
