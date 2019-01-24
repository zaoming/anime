describe('STAGGERING', () => {
  test('STAGGERING BASICS', () => {
    const target = [{data: 0}, {data: 0}];

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      delay: anime.stagger(100),
      data: 10
    });

    animation.seek(50);
    expect(target[0].data).toBe(5);
    expect(target[1].data).toBe(0);

    animation.seek(100);
    expect(target[0].data).toBe(10);
    expect(target[1].data).toBe(0);

    animation.seek(150);
    expect(target[0].data).toBe(10);
    expect(target[1].data).toBe(5);

    animation.seek(200);
    expect(target[0].data).toBe(10);
    expect(target[1].data).toBe(10);
  });

  test('START VALUE', () => {
    const target = [{data: 0}, {data: 0}];

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      delay: anime.stagger(100, {start: 1000}),
      data: 10
    });

    animation.seek(1000);
    expect(target[0].data).toBe(0);
    expect(target[1].data).toBe(0);

    animation.seek(1050);
    expect(target[0].data).toBe(5);
    expect(target[1].data).toBe(0);

    animation.seek(1100);
    expect(target[0].data).toBe(10);
    expect(target[1].data).toBe(0);

    animation.seek(1150);
    expect(target[0].data).toBe(10);
    expect(target[1].data).toBe(5);

    animation.seek(1200);
    expect(target[0].data).toBe(10);
    expect(target[1].data).toBe(10);
  });

  test('RANGE VALUE', () => {
    const target = [{data: 0}, {data: 0}, {data: 0}, {data: 0}, {data: 0}];
    const range = [0, 100];
    const step = (range[1] - range[0]) / (target.length - 1);

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      data: anime.stagger(range)
    });

    animation.seek(100);
    target.forEach((t, i) => {
      expect(t.data).toBe(step * i);
    });
  });

  test('FROM VALUE : first', () => {
    // Stagger Postion : first
    const target = [{data: 0}, {data: 0}, {data: 0}, {data: 0}, {data: 0}];
    const step = 25;

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      data: anime.stagger(step, {
        from: 'first'
      })
      // 0: 0, 1: 25, 2: 50, 3: 75, 3: 100
    });

    animation.seek(100);
    target.forEach((t, i) => {
      expect(t.data).toBe(step * i);
    });
  });

  test('FROM VALUE : center', () => {
    const target = [{data: 0}, {data: 0}, {data: 0}, {data: 0}, {data: 0}];
    const step = 25;

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      data: anime.stagger(step, {from: 'center'})
    });

    animation.seek(100);
    target.forEach((t, i) => {
      // TODO: finish this
      console.log(step * 25 - 25 * 2, t);
      // expect(t.data).toBe(i);
    });
  });

  test('FROM VALUE : end', () => {
    // Stagger Postion : Start
    const target = [{data: 0}, {data: 0}, {data: 0}];

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      delay: anime.stagger(100, {from: 'center'}),
      data: 10
    });
  });

  test('DIRECTION', () => {
    // Stagger Postion : Start
    const target = [{data: 0}, {data: 0}, {data: 0}];

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      delay: anime.stagger(100, {direction: 'reverse'}),
      data: 10
    });
  });

  test('EASING', () => {
    // Stagger Postion : Start
    const target = [{data: 0}, {data: 0}, {data: 0}];

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      delay: anime.stagger(100, {easing: 'linear'}),
      data: 10
    });
  });

  test('GRID', () => {
    // Stagger Postion : Start
    const target = [{data: 0}, {data: 0}, {data: 0}, {data: 0}];

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      delay: anime.stagger(100, {grid: [2, 2]}),
      data: 10
    });
  });

  test('AXIS', () => {
    // Stagger Postion : Start
    const target = [{data: 0}, {data: 0}, {data: 0}, {data: 0}];

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      delay: anime.stagger(100, {grid: [2, 2], axis: 'x'}),
      data: 10
    });
  });
});
