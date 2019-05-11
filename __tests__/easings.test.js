describe('EASINGS', () => {
  test('STEPS', () => {
    const target = {data: 0};

    const animation = anime({
      targets: target,
      autoplay: false,
      duration: 100,
      data: 10,
      easing: 'steps(2)'
    });

    animation.seek(25);
    expect(target.data).toBe(5);
    animation.seek(50);
    expect(target.data).toBe(5);

    animation.seek(75);
    expect(target.data).toBe(10);
    animation.seek(100);
    expect(target.data).toBe(10);
  });

  test('CUSTOM EASING FUNCTION', () => {
    const target = {data: 0};

    const animation = anime({
      targets: target,
      autoplay: false,
      duration: 100,
      data: 10,
      easing: (el, i, total) => {
        expect(el).toBeDefined();
        expect(i).toBeDefined();
        expect(total).toBe(1);

        return function(t) {
          expect(t).toBeDefined();

          return t;
        };
      }
    });

    animation.seek(50);
    expect(target.data).toBe(5);

    animation.seek(75);
    expect(target.data).toBe(7.5);

    animation.seek(100);
    expect(target.data).toBe(10);
  });
});
