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
    expect(target.opacity).toBeCloseTo(60);

    // alternate
    animation = anime({
      targets: target,
      opacity: 100,
      duration: 100,
      easing: 'linear',
      // autoplay: false,
      direction: 'alternate',
      loop: true,
      changeBegin: () => {
        console.log(target);
      },
      changeComplete: () => {
        console.log(target);
      }
    });

    window.setTimeout(done, 1000);
  });
});
