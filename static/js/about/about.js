// Hero
const hero = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero',
    // start: 'center bottom',
  },
});

hero.from('.hero h1 u, .hero h1 span, .hero h3, .hero h4', {
  y: '50%',
  duration: 0.62,
  opacity: 0,
  stagger: 0.22,
});

// Hero
const info = gsap.timeline({
  scrollTrigger: {
    trigger: '.info',
    start: 'center bottom',
  },
});

info.from('.info h2 span, .info p', {
  y: '55%',
  duration: 0.55,
  opacity: 0,
  stagger: 0.2,
});

// Hero
const strengths = gsap.timeline({
  scrollTrigger: {
    trigger: '.strengths',
    start: 'center bottom',
  },
});

strengths.from('.strengths h2', {
  y: '55%',
  duration: 0.55,
  opacity: 0,
});

strengths.from('.strengths__card', {
  y: '40%',
  duration: 0.55,
  opacity: 0,
  stagger: 0.2,
});

// Hero
const skills = gsap.timeline({
  scrollTrigger: {
    trigger: '.skills',
    start: 'center bottom',
  },
});

skills.from('.skills h2 span', {
  duration: 0.55,
  opacity: 0,
});

skills.from('.skills__card', {
  y: '55%',
  duration: 0.55,
  opacity: 0,
  stagger: 0.1,
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
