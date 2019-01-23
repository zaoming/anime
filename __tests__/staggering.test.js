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
    const target = [{data: 0}, {data: 0}, {data: 0}, {date: 0}];

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      data: anime.stagger([0, 20])
      // 0: 0, 1: 5, 2: 10
    });
  });

  test('FROM VALUE : start', () => {
    // Stagger Postion : Start
    const target = [{data: 0}, {data: 0}, {data: 0}];

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      delay: anime.stagger(100, {from: 'start'}),
      data: 10
    });
  });

  test('FROM VALUE : center', () => {
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
