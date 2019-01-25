describe('KEYFRAMES', () => {
  test('ANIMATION KEYFRAMES', () => {
    const target = {data: 0};

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      keyframes: [
        {
          data: 60,
          duration: 10,
          delay: 10
        },
        {
          data: 70,
          duration: 20,
          delay: 20
        },
        {
          data: 80,
          duration: 30,
          delay: 30
        },
        {
          data: 90,
          duration: 40,
          delay: 40
        },
        {
          data: 100,
          duration: 50,
          delay: 50
        }
      ]
    });

    animation.seek(10);
    expect(target.data).toBe(0);

    animation.seek(20);
    expect(target.data).toBe(60);

    animation.seek(60);
    expect(target.data).toBe(70);

    animation.seek(140);
    expect(target.data).toBe(80);

    animation.seek(220);
    expect(target.data).toBe(90);

    animation.seek(320);
    expect(target.data).toBe(100);
  });

  test('PROPERTY KEYFRAMES', () => {
    const target = {data: 0, opacity: 0};

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      data: [{value: 100}, {value: 200}],
      opacity: [{value: 100}, {value: 500}, {value: 1000}]
    });

    animation.seek(50);
    expect(target.data).toBeCloseTo(100, 1);

    animation.seek(100);
    expect(target.data).toBeCloseTo(200, 1);

    animation.seek(33.34);
    expect(target.opacity).toBeCloseTo(100, 0);

    animation.seek(66.67);
    expect(target.opacity).toBeCloseTo(500, 0);

    animation.seek(100);
    expect(target.opacity).toBeCloseTo(1000, 0);
  });
});
