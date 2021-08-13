(() => {
  const getElement = (className) => {
    const element = document.querySelector(className);

    return element;
  };

  const viewMore = getElement('.projects__more');
  const contact = getElement('.projects__contact');

  viewMore.addEventListener('click', () => {
    window.location.href = '/projects';
  });

  contact.addEventListener('click', () => {
    window.location.href = '/contact';
  });
})();
