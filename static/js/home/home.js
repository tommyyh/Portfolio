(() => {
  const button = document.querySelector('.hero').querySelector('button');

  button.addEventListener('click', () => {
    window.location.href = '/projects';
  });
})();

(() => {
  const button = document
    .querySelector('.contact_prompt')
    .querySelector('button');

  button.addEventListener('click', () => {
    window.location.href = '/contact';
  });
})();

// < ----------- Animation ------------> //
// Hero
const hero = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero',
    // start: 'center bottom',
  },
});

hero.from('.hero h1 span', {
  y: '50%',
  duration: 0.56,
  opacity: 0,
  stagger: 0.13,
});

hero.from(
  '.hero button',
  {
    y: '35%',
    duration: 0.22,
    opacity: 0,
  },
  '-=0.51'
);

// Paragraph
const heroP = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero_p',
    start: 'center bottom',
  },
});

heroP.from('.hero p', {
  y: '35%',
  duration: 0.56,
  opacity: 0,
});

// What i do
const wid = gsap.timeline({
  scrollTrigger: {
    trigger: '.wid',
    start: 'top bottom',
  },
});

wid.from('.wid h2', {
  y: '35%',
  duration: 1,
  opacity: 0,
});

wid.from(
  '.wid span',
  {
    y: '35%',
    duration: 0.56,
    opacity: 0,
    stagger: 0.13,
  },
  '-=0.6'
);

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

// Projects buttons
const projectButtons = gsap.timeline({
  scrollTrigger: {
    trigger: '.projects__buttons',
    start: 'center bottom',
  },
});

projectButtons.from('.projects__buttons button', {
  y: '65%',
  duration: 0.7,
  opacity: 0,
  stagger: 0.2,
});

// Projects buttons
const contactP = gsap.timeline({
  scrollTrigger: {
    trigger: '.contact_prompt',
    start: 'center bottom',
  },
});

contactP.from(
  '.contact_prompt h2 span, .contact_prompt p, .contact_prompt button',
  {
    y: '45%',
    duration: 0.55,
    opacity: 0,
    stagger: 0.2,
  }
);
