(function () {
  const showMore = document.querySelector('.js-show-more');

  showMore.addEventListener('click', (e) => {
    const heroItem = e.target.parentNode;
    window.scrollTo({
      top: heroItem.clientHeight - 70,
      behavior: 'smooth',
    })
  });

  const container = document.querySelector('.field--name-field-hero-items');

  if (!container) {
    return false;
  }

  const slider = tns({
    container: '.field--name-field-hero-items',
    mode: 'gallery',
    autoplay: true,
    controls: false,
    nav: false,
    autoplayButtonOutput: false,
    speed: 300,
  });
})();
