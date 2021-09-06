(function () {
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

