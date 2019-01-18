describe('TARGETS', () => {
  test('NO SELECTOR', () => {
    const a = anime({});

    expect(a.animatables).toBeArrayOfSize(0);
  });

  test('INVALID SELECTOR', () => {
    const a = anime({
      targets: ''
    });

    expect(a.animatables).toBeArrayOfSize(0);
  });

  test('CSS SELECTOR', () => {
    const targets = document.getElementsByClassName('target');
    const a = anime({
      targets: '.target'
    });

    expect(a.animatables).toBeArray();
    expect(a.animatables.length).toBe(targets.length);

    a.animatables.forEach((animatable, i) => {
      expect(animatable.target.tagName).toBe(targets[i].tagName);
    });
  });

  test('DOM NODE / NODELIST', () => {
    const targets = document.getElementsByClassName('target');
    const target = document.getElementsByClassName('target')[0];

    let a = anime({
      targets: targets
    });

    expect(a.animatables).toBeArray();
    expect(a.animatables.length).toBe(targets.length);

    a.animatables.forEach((animatable, i) => {
      expect(animatable.target.tagName).toBe(targets[i].tagName);
    });

    a = anime({
      targets: target
    });

    expect(a.animatables).toBeArray();
    expect(a.animatables.length).toBe(1);
    expect(a.animatables[0].target.tagName).toBe(target.tagName);
  });

  test('JAVASCRIPT OBJECT', () => {
    const targets = {
      charged: '0%',
      cycles: 120
    };

    const a = anime({
      targets: targets
    });

    expect(a.animatables).toBeArray();
    expect(a.animatables.length).toBe(1);
  });

  test('ARRAY', () => {
    const targetsDOM = document.getElementsByClassName('target');

    const targets = [
      '.target',
      document.getElementById('target'),
      {
        charged: '0%',
        cycles: 120
      }
    ];

    const a = anime({
      targets: targets
    });

    expect(a.animatables).toBeArray();
    expect(a.animatables.length).toBe(targetsDOM.length + 1 + 1);
  });
});
