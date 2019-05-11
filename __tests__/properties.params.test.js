describe('PROPERTY PARAMETERS', () => {
  test('DURATION', done => {
    const target = {opacity: 0};

    const animation = anime({
      targets: target,
      opacity: 1,
      duration: 100,
      begin: () => {
        window.setTimeout(() => {
          expect(animation.progress).toBe(100);
          expect(animation.completed).toBeTrue();

          done();
        }, 100);
      }
    });
  });

  test('DELAY', done => {
    const target = {opacity: 0};
    let startTime = performance.now();
    let endTime;

    anime({
      targets: target,
      opacity: 1,
      duration: 100,
      delay: 100,
      changeBegin: () => {
        endTime = performance.now();
        expect(endTime - startTime).toBeWithin(50, 150);
      },
      complete: () => {
        expect(performance.now() - endTime).toBeWithin(50, 150);

        done();
      }
    });
  });

  test('END DELAY', done => {
    const target = {opacity: 0};
    let startTime = performance.now();
    let endTime;

    anime({
      targets: target,
      opacity: 1,
      duration: 100,
      endDelay: 100,
      changeComplete: () => {
        endTime = performance.now();
        expect(endTime - startTime).toBeWithin(50, 150);
      },
      complete: () => {
        expect(performance.now() - endTime).toBeWithin(50, 150);

        done();
      }
    });
  });

  test('ROUND', () => {
    const target = {opacity: 0};

    const animation = anime({
      targets: target,
      opacity: 10,
      duration: 100,
      round: 1,
      autoPlay: false
    });

    animation.seek(0.4);
    expect(target.opacity).toBe(0);

    animation.seek(0.8);
    expect(target.opacity).toBe(1);
  });

  test('SPECIFIC PROPERTY PARAMETERS', () => {
    const target = {opacity: 0};

    const animation = anime({
      targets: target,
      opacity: {
        value: 100,
        duration: 100,
        easing: 'linear'
      },
      autoPlay: false
    });

    animation.seek(0.4);
    expect(target.opacity).toBe(0.4);

    animation.seek(0.8);
    expect(target.opacity).toBe(0.8);
  });

  test('FUNCTION BASED PARAMETERS', () => {
    const target = {opacity: 0};

    const animation = anime({
      targets: target,
      opacity: () => {
        return 100;
      },
      duration: () => {
        return 100;
      },
      autoPlay: () => {
        return false;
      },
      easing: () => {
        return 'linear';
      }
    });

    animation.seek(0.4);
    expect(target.opacity).toBe(0.4);
  });
});
