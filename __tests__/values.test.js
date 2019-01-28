describe('VALUES', () => {
  test('UNITLESS', () => {
    const targets = document.getElementsByClassName('target');

    const animation = anime({
      targets: targets,
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
    const colors = [
      {name: 'hex', color: '#FFFFFF'},
      {name: 'rgb', color: 'rgb(255, 255, 255)'},
      {name: 'rgba', color: 'rgba(255, 255, 255, 0)'},
      {name: 'hsl', color: 'hsl(0, 0%, 100%)'},
      {name: 'hsla', color: 'hsla(0, 0%, 100%, 0)'}
    ];

    for (let i = 0; i < colors.length; i += 1) {
      const target = document.createElement('div');
      const color = colors[i];

      const animation = anime({
        targets: target,
        autoplay: false,
        backgroundColor: color.color
      });

      animation.seek(100);

      const {backgroundColor} = target.style;
      expect(backgroundColor).toBe('rgba(0, 0, 0, 0)');
    }
  });

  test('FROM TO', () => {
    const target = {data: 0};

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      data: [0.5, 1]
    });

    animation.seek(0);
    expect(target.data).toBe(0.5);

    animation.seek(50);
    expect(target.data).toBe(0.75);

    animation.seek(100);
    expect(target.data).toBe(1);
  });

  test('FUNCTION BASED VALUES', () => {
    const target = [{data: 0}, {data: 1}];

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      data: (el, index) => {
        expect(index).toBeDefined();
        expect(index).toBeGreaterThanOrEqual(0);

        if (index === 0) {
          expect(el.data).toBe(0);
        }

        if (index === 1) {
          expect(el.data).toBe(1);
        }

        // 5 and 10 respectively
        return (el.data + 1) * 5;
      }
    });

    expect(target[0].data).toBe(0);
    expect(target[1].data).toBe(1);

    animation.seek(50);
    expect(target[0].data).toBe(2.5);
    // TODO: invalid value returned
    expect(target[1].data).toBe(5);

    animation.seek(100);
    expect(target[0].data).toBe(5);
    expect(target[1].data).toBe(10);
  });
});
