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
      expect(t.data).toBe(Math.abs(step - step * (i - 1)));
    });
  });

  test('FROM VALUE : end', () => {
    // Stagger Postion : end
    const target = [{data: 0}, {data: 0}, {data: 0}, {data: 0}, {data: 0}];
    const step = 25;

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      data: anime.stagger(step, {from: 'last'})
    });

    animation.seek(100);
    target.forEach((t, i) => {
      expect(t.data).toBe(step * (target.length - 1) - step * i);
    });
  });

  test('DIRECTION', () => {
    const target = [{data: 0}, {data: 0}];

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      delay: anime.stagger(100, {direction: 'reverse'}),
      data: 10
    });

    animation.seek(50);
    expect(target[1].data).toBe(5);
    expect(target[0].data).toBe(0);

    animation.seek(100);
    expect(target[1].data).toBe(10);
    expect(target[0].data).toBe(0);

    animation.seek(150);
    expect(target[1].data).toBe(10);
    expect(target[0].data).toBe(5);

    animation.seek(200);
    expect(target[1].data).toBe(10);
    expect(target[0].data).toBe(10);
  });

  test('EASING', () => {
    const target = [{data: 0}, {data: 0}, {data: 0}];

    const animation = anime({
      targets: target,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      delay: anime.stagger(100, {
        easing: i => {
          return i;
        }
      }),
      data: 10
    });

    animation.seek(100);
    expect(target[0].data).toBe(10);
    expect(target[1].data).toBe(0);
    expect(target[2].data).toBe(0);

    animation.seek(200);
    expect(target[0].data).toBe(10);
    expect(target[1].data).toBe(10);
    expect(target[2].data).toBe(0);

    animation.seek(300);
    expect(target[0].data).toBe(10);
    expect(target[1].data).toBe(10);
    expect(target[2].data).toBe(10);
  });

  test('GRID', () => {
    const total = 25;
    const rows = 5;
    const cols = 5;
    const mid = 3;
    const targets = [];
    const targets2d = [];

    // fill grid with data
    for (let i = 0; i < total; i += 1) {
      targets.push({
        data: 0
      });
    }

    // create 2d array for eaiser testing
    for (let i = 0; i < rows; i += 1) {
      const arr = [];
      for (let j = 0; j < cols; j += 1) {
        arr.push(targets[i * cols + j]);
      }

      targets2d.push(arr);
    }

    const animation = anime({
      targets: targets,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      delay: anime.stagger(100, {grid: [rows, cols], from: 'center'}),
      data: 100
    });

    animation.seek(150);

    // compare target values
    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < cols; j += 1) {
        const target = targets2d[i][j];
        const xDist = j + mid - cols;
        const yDist = i + mid - rows;
        const dist = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));

        if (dist > 2 && dist < 3) {
          expect(target.data).toBe(0);
        } else if (dist > 1 && dist < 2) {
          expect(target.data).toBe(9);
        } else if (dist === 3) {
          expect(target.data).toBe(0);
        } else if (dist === 2) {
          expect(target.data).toBe(0);
        } else if (dist === 1) {
          expect(target.data).toBe(50);
        } else if (dist === 0) {
          expect(target.data).toBe(100);
        }
      }
    }
  });

  test('AXIS : x', () => {
    const total = 25;
    const rows = 5;
    const cols = 5;
    const targets = [];
    const targets2d = [];

    // fill grid with data
    for (let i = 0; i < total; i += 1) {
      targets.push({
        data: 0
      });
    }

    // create 2d array for eaiser testing
    for (let i = 0; i < rows; i += 1) {
      const arr = [];
      for (let j = 0; j < cols; j += 1) {
        arr.push(targets[i * cols + j]);
      }

      targets2d.push(arr);
    }

    const animation = anime({
      targets: targets,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      delay: anime.stagger(100, {grid: [rows, cols], axis: 'x'}),
      data: 100
    });

    animation.seek(250);

    // compare target values
    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < cols; j += 1) {
        const target = targets2d[i][j];

        switch (j) {
          case 0:
            expect(target.data).toBe(100);
            break;
          case 1:
            expect(target.data).toBe(100);
            break;
          case 2:
            expect(target.data).toBe(50);
            break;
          case 3:
            expect(target.data).toBe(0);
            break;
          case 4:
          default:
            expect(target.data).toBe(0);
            break;
        }
      }
    }
  });

  test('AXIS : y', () => {
    const total = 25;
    const rows = 5;
    const cols = 5;
    const targets = [];
    const targets2d = [];

    // fill grid with data
    for (let i = 0; i < total; i += 1) {
      targets.push({
        data: 0
      });
    }

    // create 2d array for eaiser testing
    for (let i = 0; i < rows; i += 1) {
      const arr = [];
      for (let j = 0; j < cols; j += 1) {
        arr.push(targets[i * cols + j]);
      }

      targets2d.push(arr);
    }

    const animation = anime({
      targets: targets,
      autoplay: false,
      easing: 'linear',
      duration: 100,
      delay: anime.stagger(100, {grid: [rows, cols], axis: 'y'}),
      data: 100
    });

    animation.seek(250);

    // compare target values
    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < cols; j += 1) {
        const target = targets2d[i][j];

        switch (i) {
          case 0:
            expect(target.data).toBe(100);
            break;
          case 1:
            expect(target.data).toBe(100);
            break;
          case 2:
            expect(target.data).toBe(50);
            break;
          case 3:
            expect(target.data).toBe(0);
            break;
          case 4:
          default:
            expect(target.data).toBe(0);
            break;
        }
      }
    }
  });
});
