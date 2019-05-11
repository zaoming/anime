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
    expect(target.opacity).toBe(40);

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

  test('LOOP', done => {
    const target = {opacity: 0};

    const changeBeginFn = jest.fn();
    const changeCompleteFn = jest.fn();
    const loopBeginFn = jest.fn();
    const loopCompleteFn = jest.fn();

    const noOfLoops = 3;

    anime({
      targets: target,
      opacity: 100,
      duration: 100,
      easing: 'linear',
      autoplay: true,
      loop: noOfLoops,
      changeBegin: changeBeginFn,
      changeComplete: changeCompleteFn,
      loopBegin: loopBeginFn,
      loopComplete: loopCompleteFn,
      complete: () => {
        expect(target.opacity).toBe(100);

        expect(changeBeginFn).toHaveBeenCalledTimes(noOfLoops);
        expect(changeCompleteFn).toHaveBeenCalledTimes(noOfLoops);
        expect(loopBeginFn).toHaveBeenCalledTimes(noOfLoops);
        expect(loopCompleteFn).toHaveBeenCalledTimes(noOfLoops);

        done();
      }
    });
  });

  test('AUTOPLAY : false', done => {
    const target = {opacity: 0};

    const animation = anime({
      targets: target,
      opacity: 100,
      duration: 100,
      easing: 'linear',
      autoplay: false
    });

    expect(animation.began).toBeFalse();
    expect(animation.progress).toBe(0);

    animation.play();

    window.setTimeout(() => {
      expect(animation.began).toBeTrue();
      expect(animation.progress).toBeGreaterThanOrEqual(50);

      done();
    }, 100);
  });

  test('AUTOPLAY : true', done => {
    const target = {opacity: 0};

    const animation = anime({
      targets: target,
      opacity: 100,
      duration: 100,
      easing: 'linear',
      autoplay: true
    });

    window.setTimeout(() => {
      expect(animation.completed).toBeTrue();
      expect(animation.progress).toBe(100);

      done();
    }, 150);
  });
});
