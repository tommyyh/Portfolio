(() => {
  const nav = document.querySelector('.burger');
  const menu = document.querySelector('.menu');

  nav.addEventListener('click', () => {
    nav.classList.toggle('burger_open');
    menu.classList.toggle('menu_open');

    document.body.style.overflowY =
      nav.className === 'burger burger_open' ? 'hidden' : 'initial';
  });
})();

(() => {
  const getElemet = (className) => {
    const element = document.querySelector(className).querySelector('a');

    return element;
  };

  // Highlight a link that the user is currently on
  const about = getElemet('#nav__about');
  const projects = getElemet('#nav__projects');
  const contact = getElemet('#nav__contact');
  const pathName = window.location.pathname;

  if (pathName === '/about/') {
    about.style.color = '#fff';
  } else if (pathName === '/projects/') {
    projects.style.color = '#fff';
  } else if (pathName === '/contact/') {
    contact.style.color = '#fff';
  }
})();
