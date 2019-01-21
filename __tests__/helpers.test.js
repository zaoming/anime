describe('HELPERS', () => {
  test('REMOVE', () => {
    const targetsDOM = document.getElementsByClassName('target');
    const target = {opacity: 0};

    const animation = anime({
      targets: [target, '.target'],
      opacity: 100,
      duration: 100,
      easing: 'linear',
      autoplay: true,
      loop: true
    });

    expect(animation.animatables.length).toBe(targetsDOM.length + 1);

    animation.seek(40);
    expect(target.opacity).toBe(40);

    anime.remove('.target');
    //TODO: fix this test
    // expect(animation.animatables.length).toBe(1);

    animation.seek(80);
    expect(target.opacity).toBe(80);
  });

  test('SET', () => {
    const targetsDOM = document.getElementsByClassName('target');
    const target = {opacity: 0};

    anime({
      targets: [target, '.target'],
      opacity: 100,
      duration: 100,
      easing: 'linear',
      autoplay: false
    });

    anime.set([target, '.target'], {opacity: 0.5});
    expect(target.opacity).toBe(0.5);

    for (let i = 0; i < targetsDOM.length; i += 1) {
      const t = targetsDOM[i];
      expect(parseFloat(t.style.opacity)).toBe(0.5);
    }
  });

  test('RANDOM', () => {
    expect(anime.random(0, 100)).toBeWithin(0, 100 + 1);
    expect(anime.random(100, 200)).toBeWithin(100, 200 + 1);
  });

  test('TICK', done => {
    const target = {opacity: 0};
    const called = [];

    const animation = anime({
      targets: target,
      opacity: 100,
      duration: 100,
      easing: 'linear',
      autoplay: false,
      loop: false,
      changeBegin: () => {
        called.push(1);
      },
      changeComplete: () => {
        called.push(1);

        if (called.length === 2) {
          done();
        }
      }
    });

    function loop(t) {
      animation.tick(t);
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  });

  test('RUNNING', () => {
    const target = {opacity: 0};

    anime({
      targets: [target],
      opacity: 100
    });

    anime({
      targets: ['.target'],
      opacity: 100
    });

    anime({
      targets: [target, '.target'],
      opacity: 100
    });

    //TODO: fix instances running count
    // expect(anime.running.length).toBe(3);
  });
});
