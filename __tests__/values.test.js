describe('VALUES', () => {
  test('UNITLESS', () => {
    const targets = document.getElementsByClassName('target');

    const animation = anime({
      targets: '.target',
      opacity: 1,
      translateX: 200,
      rotate: 180,
      duration: 100,
      autoplay: false,
      easing: 'linear'
    });

    animation.seek(50);

    for (let i = 0; i < targets.length; i += 1) {
      const target = targets[i];

      expect(target.style.opacity).toBe('0.5');
      expect(target.style.transform.trim()).toBe(
        'translateX(100px) rotate(90deg)'
      );
    }
  });

  test('SPECIFIC UNIT', () => {
    const targets = document.getElementsByClassName('target');

    for (let i = 0; i < targets.length; i += 1) {
      const target = targets[i];

      target.style.width = '25px';
    }

    const animation = anime({
      targets: '.target',
      width: '100%',
      duration: 100,
      autoplay: false,
      easing: 'linear'
    });

    animation.seek(50);

    for (let i = 0; i < targets.length; i += 1) {
      const target = targets[i];
      // TODO: needs to update this test
      expect(target.style.width).toBe('50%');
    }
  });

  test('RELATIVE', () => {
    const targets = document.getElementsByClassName('target');

    for (let i = 0; i < targets.length; i += 1) {
      const target = targets[i];

      target.style.width = '25px';
      target.style.transform = 'none';
    }

    const animation = anime({
      targets: '.target',
      width: '+=50',
      translateX: '+=50',
      duration: 100,
      autoplay: false,
      easing: 'linear'
    });

    animation.seek(50);

    for (let i = 0; i < targets.length; i += 1) {
      const target = targets[i];

      expect(target.style.width).toBe('50px');
      expect(target.style.transform.trim()).toBe('translateX(25px)');
    }
  });

  test('COLORS', () => {
    const targets = document.getElementsByClassName('target');

    const animation = anime({
      targets: '.target',
      duration: 100,
      autoplay: false,
      easing: 'linear'
    });

    animation.seek(50);

    for (let i = 0; i < targets.length; i += 1) {
      const target = targets[i];

      // TODO: complete this
    }
  });
});
