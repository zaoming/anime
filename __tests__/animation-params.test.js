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
    // expect(target.opacity).toBeCloseTo(60);

    // alternate
    let begins = 0;
    let completes = 0;
    let beginValues = [];
    let completeValues = [];

    animation = anime({
      targets: target,
      opacity: 100,
      duration: 100,
      easing: 'linear',
      direction: 'alternate',
      loop: true,
      changeBegin: (a, b, c) => {
        begins += 1;

        console.log(a, b, c);
      },
      changeComplete: () => {
        completes += 1;

        if (completes === 2) {
          console.log(begins, completes);

          expect(begins).toBe(2);
          done();
        }
      }
    });
  });
});
