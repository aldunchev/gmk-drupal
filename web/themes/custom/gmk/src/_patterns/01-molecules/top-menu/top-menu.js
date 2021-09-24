/**
 * @file
 * Top menu js script.
 * Logic for sticky and scrolling.
 */

(function () {

  const topMenu = document.querySelector('.top-menu');
  const body = document.querySelector('body');
  const items = document.querySelectorAll('.top-menu__item a');

  /**
   * Scroll handler.
   */
  const handleScroll = function () {
    let menuHeight = document.querySelector('.site-header').offsetHeight;
    let hero = document.querySelector('.paragraph--type--hero') || document.querySelector('.paragraph--type--hero-item');
    let heroHeight = hero ? hero.offsetHeight : 0;
    let offset = (heroHeight + menuHeight) - 70;

    if (window.pageYOffset > offset) {
      body.classList.add('top-menu-padding');
      topMenu.classList.add('top-menu--sticky');
    }
    else {
      document.querySelector('body').classList.remove('top-menu-padding');
      topMenu.classList.remove('top-menu--sticky');
    }
  }

  document.addEventListener('scroll', function () { handleScroll() }, { passive: true });

  /**
   * Click handler of top menu item.
   */
  const handleClickItem = function (event) {
    event.preventDefault();
    let anchorHash = event.target.hash;
    let anchor = document.querySelector(anchorHash);
    let anchorBoundingClient = anchor.getBoundingClientRect();
    let body = document.body.getBoundingClientRect();

    let activeItem = event.target;
    items.forEach(function (currentItem) {
      currentItem.classList.remove('active-link');
    });

    activeItem.classList.add('active-link')

    window.scroll({
      top: (anchorBoundingClient.top - body.top) - 160,
      left: 0,
      behavior: 'smooth'
    });
  }

  const topMenuItems = document.querySelectorAll('.top-menu__item');

  topMenuItems.forEach(function (currentItem) {
    currentItem.addEventListener('click', handleClickItem);
  });

})();
