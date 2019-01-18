describe('CONTROLS', () => {
  // duration is used to reduce test run time

  test('PLAY / PAUSE', done => {
    const target = {opacity: 0};

    const animation = anime({
      targets: target,
      opacity: 1,
      duration: 100,
      autoplay: false,
      complete: () => {
        expect(animation.progress).toBe(100);

        done();
      }
    });

    expect(animation.progress).toBe(0);
    expect(animation.remaining).toBe(1);
    expect(animation.began).toBeFalse();

    animation.play();

    window.setTimeout(() => {
      animation.pause();

      expect(animation.progress).toBeGreaterThan(0);
      expect(animation.completed).toBeFalse();

      animation.play();
    }, 50);
  });

  test('RESTART', done => {
    const target = {opacity: 0};

    const animation = anime({
      targets: target,
      opacity: 1,
      duration: 100,
      autoplay: false
    });

    expect(animation.progress).toBe(0);
    expect(animation.remaining).toBe(1);
    expect(animation.began).toBeFalse();

    animation.play();

    window.setTimeout(() => {
      animation.pause();

      expect(animation.progress).toBeGreaterThan(0);
      expect(animation.completed).toBeFalse();

      animation.restart();

      expect(animation.progress).toBe(0);
      expect(animation.remaining).toBe(1);
      expect(animation.began).toBeFalse();

      done();
    }, 100);
  });

  test('REVERSE', done => {
    const target = {opacity: 0};

    const animation = anime({
      targets: target,
      opacity: 1,
      duration: 100,
      autoplay: false,
      easing: 'linear',
      complete: () => {
        expect(target.opacity).toBe(0);

        done();
      }
    });

    // rewrite without using seek
    animation.seek(75);

    expect(target.opacity).toBe(0.75);

    animation.reverse();
    animation.play();
  });

  test('SEEK', done => {
    const target = {opacity: 0};

    const animation = anime({
      targets: target,
      opacity: 1,
      duration: 100,
      autoplay: false,
      easing: 'linear'
    });

    animation.seek(75);

    expect(target.opacity).toBe(0.75);
    done();
  });
});
