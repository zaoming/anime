describe('CALLBACKS & PROMISES', () => {
  // duration is used to reduce test run time

  test('UPDATE', done => {
    const updateFn = jest.fn();

    anime({
      targets: {opacity: 0},
      opacity: 0.5,
      duration: 100,
      update: function(a) {
        expect(a).toBeDefined();
        expect(a).toMatchObject(this);

        updateFn();
      },
      complete() {
        expect(updateFn).toHaveBeenCalled();

        done();
      }
    });
  });

  test('BEGIN & COMPLETE', done => {
    const beginFn = jest.fn();

    anime({
      targets: {opacity: 0},
      opacity: 0.5,
      duration: 100,
      begin: function(a) {
        expect(a).toBeDefined();
        expect(a).toMatchObject(this);

        beginFn();
      },
      complete() {
        expect(beginFn).toHaveBeenCalled();

        done();
      }
    });
  });

  test('LOOPBEGIN & LOOPCOMPLETE', done => {
    const beginFn = jest.fn();
    const completeFn = jest.fn();
    let loops = 0;

    anime({
      targets: {opacity: 0},
      opacity: 0.5,
      duration: 100,
      loop: true,
      loopBegin: function(a) {
        expect(a).toBeDefined();
        expect(a).toMatchObject(this);

        beginFn();
      },
      loopComplete: function(a) {
        expect(a).toBeDefined();
        expect(a).toMatchObject(this);

        completeFn();

        loops += 1;
        if (loops === 2) {
          expect(beginFn).toHaveBeenCalled();
          expect(completeFn).toHaveBeenCalled();

          done();
        }
      }
    });
  });

  test('CHANGE', done => {
    let loops = 0;
    let changes = 0;

    anime({
      targets: {opacity: 0},
      opacity: 0.5,
      duration: 100,
      loop: true,
      delay: 10,
      endDelay: 10,
      change: () => {
        changes += 1;
      },
      loopComplete: () => {
        loops += 1;
        if (loops === 2) {
          expect(changes).toBeGreaterThan(0);

          done();
        }
      }
    });
  });

  test('CHANGEBEGIN & CHANGECOMPLETE', done => {
    const changeBeginFn = jest.fn();

    anime({
      targets: {opacity: 0},
      opacity: 0.5,
      duration: 100,
      changeBegin: function(a) {
        expect(a).toBeDefined();
        expect(a).toMatchObject(this);

        changeBeginFn();
      },
      changeComplete: function(a) {
        expect(a).toBeDefined();
        expect(a).toMatchObject(this);

        expect(changeBeginFn).toHaveBeenCalled();
        done();
      }
    });
  });

  test('FINISHED PROMISE', done => {
    anime({
      targets: {opacity: 0},
      opacity: 0.5,
      duration: 100
    }).finished.then(done);
  });
});
