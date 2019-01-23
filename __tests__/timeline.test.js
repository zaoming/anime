describe('TIMELINE', () => {
  test('TIMELINE BASICS', () => {
    const target = [{data: 0}, {data: 0}, {data: 0}];

    const timeline = anime.timeline({
      autoplay: false,
      easing: 'linear',
      duration: 100
    });

    target.forEach(t => {
      timeline.add({
        targets: t,
        data: 10
      });
    });
  });

  test('TIME OFFSETS', () => {
    // asolute offset
    let target = [{data: 0}, {data: 0}, {data: 0}];
    let timeline = anime.timeline({
      autoplay: false,
      easing: 'linear',
      duration: 100
    });

    target.forEach((t, index) => {
      timeline.add(
        {
          targets: t,
          data: 10
        },
        index * 2
      );
    });

    // relative offset
    target = [{data: 0}, {data: 0}, {data: 0}];
    timeline = anime.timeline({
      autoplay: false,
      easing: 'linear',
      duration: 100
    });

    target.forEach((t, index) => {
      timeline.add(
        {
          targets: t,
          data: 10
        },
        `+=${index * 2}`
      );
    });
  });

  test('PARAMETERS INHERITANCE', () => {
    let target = [{data: 0}, {data: 0}, {data: 0}];
    let timeline = anime.timeline({
      autoplay: false,
      easing: 'linear',
      duration: 100
    });

    target.forEach((t, index) => {
      timeline.add(
        {
          targets: t,
          data: 10
        },
        index * 2
      );
    });
  });
});
