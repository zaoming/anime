describe('PROPERTIES', () => {
  test('CSS PROPERTIES', () => {
    const target = document.getElementById('target');

    const animation = anime({
      targets: target,
      duration: 100,
      easing: 'linear',
      width: '100px',
      height: '100px',
      left: '50px',
      top: '50px',
      opacity: 0.5,
      translateX: 100,
      translateY: 150,
      translateZ: 450,
      rotate: 100
    });

    animation.seek(50);
    expect(target.style.width).toBe('50px');
    expect(target.style.height).toBe('50px');
    expect(target.style.left).toBe('25px');
    expect(target.style.opacity).toBe('0.25');
    expect(target.style.transform.trim()).toBe(
      'translateX(50px) translateY(75px) translateZ(225px) rotate(50deg)'
    );

    animation.seek(100);
    expect(target.style.width).toBe('100px');
    expect(target.style.height).toBe('100px');
    expect(target.style.left).toBe('50px');
    expect(target.style.opacity).toBe('0.5');
    expect(target.style.transform.trim()).toBe(
      'translateX(100px) translateY(150px) translateZ(450px) rotate(100deg)'
    );
  });

  test('OBJECT PROPERTIES', () => {
    const target = {
      a: 0,
      b: 100,
      c: 200
    };

    const animation = anime({
      targets: target,
      duration: 100,
      easing: 'linear',
      a: 100,
      b: -100,
      c: 400
    });

    animation.seek(50);
    expect(target.a).toBe(50);
    expect(target.b).toBe(0);
    expect(target.c).toBe(300);

    animation.seek(100);
    expect(target.a).toBe(100);
    expect(target.b).toBe(-100);
    expect(target.c).toBe(400);
  });
});
