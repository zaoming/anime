describe('PROPERTIES', () => {
  test('CSS PROPERTIES', done => {
    const target = document.getElementById('target');
    // const beginStyle = target.style;

    anime({
      targets: target,
      width: 100,
      height: 100,
      left: 50,
      opacity: 0.5,
      duration: 100,
      begin() {},
      update() {},
      complete() {
        // TODO match all proeprties

        done();
      }
    });
  });
});
