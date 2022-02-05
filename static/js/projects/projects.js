// Projects
const project = gsap.timeline({
  scrollTrigger: {
    trigger: '.projects__card1',
    start: 'center bottom',
  },
});

project.from('.projects__card1 span, .projects__card1 span a', {
  x: '-40%',
  duration: 0.7,
  opacity: 0,
  stagger: 0.32,
});

project.from(
  '.projects__card1 h3, .projects__card1 p, .projects__card1 div a',
  {
    y: '65%',
    duration: 0.7,
    opacity: 0,
    stagger: 0.3,
  },
  '-=1'
);

project.from(
  '.projects__card_tech1 .projects_card_icon',
  {
    y: '65%',
    duration: 0.7,
    opacity: 0,
    stagger: 0.3,
  },
  '-=1'
);

// Projects 2
const project2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.projects__card2',
    start: 'center bottom',
  },
});

project2.from('.projects__card2 span, .projects__card2 span a', {
  x: '40%',
  duration: 0.7,
  opacity: 0,
  stagger: 0.32,
});

project2.from(
  '.projects__card2 h3, .projects__card2 p, .projects__card2 div a',
  {
    y: '65%',
    duration: 0.7,
    opacity: 0,
    stagger: 0.2,
  },
  '-=1'
);

project2.from(
  '.projects__card_tech2 .projects_card_icon',
  {
    y: '65%',
    duration: 0.7,
    opacity: 0,
    stagger: 0.2,
  },
  '-=1'
);

// Projects 3
const project3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.projects__card3',
    start: 'center bottom',
  },
});

project3.from('.projects__card3 span, .projects__card3 span a', {
  x: '-40%',
  duration: 0.7,
  opacity: 0,
  stagger: 0.32,
});

project3.from(
  '.projects__card3 h3, .projects__card3 p, .projects__card3 div a',
  {
    y: '65%',
    duration: 0.7,
    opacity: 0,
    stagger: 0.2,
  },
  '-=1'
);

project3.from(
  '.projects__card_tech3 .projects_card_icon',
  {
    y: '65%',
    duration: 0.7,
    opacity: 0,
    stagger: 0.2,
  },
  '-=1'
);

// Projects 4
const project4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.projects__card4',
    start: 'center bottom',
  },
});

project4.from('.projects__card4 span, .projects__card4 span a', {
  x: '40%',
  duration: 0.7,
  opacity: 0,
  stagger: 0.32,
});

project4.from(
  '.projects__card4 h3, .projects__card4 p, .projects__card4 div a',
  {
    y: '65%',
    duration: 0.7,
    opacity: 0,
    stagger: 0.2,
  },
  '-=1'
);

project4.from(
  '.projects__card_tech4 .projects_card_icon',
  {
    y: '65%',
    duration: 0.7,
    opacity: 0,
    stagger: 0.2,
  },
  '-=1'
);
