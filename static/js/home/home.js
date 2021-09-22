(() => {
  const button = document.querySelector('.hero').querySelector('button');

  button.addEventListener('click', () => {
    window.location.href = '/projects';
  });
})();

(() => {
  const button = document.querySelector('.contact_prompt').querySelector('button');

  button.addEventListener('click', () => {
    window.location.href = '/contact';
  })
})()
