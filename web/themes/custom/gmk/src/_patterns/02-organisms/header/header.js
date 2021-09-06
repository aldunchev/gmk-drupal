/**
 * @file
 * Header and menu header js logic.
 */
//https://gomakethings.com/finding-the-next-and-previous-sibling-elements-that-match-a-selector-with-vanilla-js/
(function () {
  const burger = document.querySelector('.js-hamburger');
  const mainNav = document.querySelector('#block-gmk-main-menu');
  const body = document.querySelector('body');
  const subMenuTrigger = document.querySelectorAll('.js-expand-submenu');
  const backButtom = document.querySelectorAll('.js-close-submenu');

  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    mainNav.classList.toggle('is-open');
    body.classList.toggle('is-main-nav-open');

    if (mainNav.classList.contains('is-open')) {
      bodyScrollLock.disableBodyScroll(mainNav);
    }
    else {
      bodyScrollLock.enableBodyScroll(mainNav);
    }
  });

  subMenuTrigger.forEach(function (currentItem) {
    currentItem.addEventListener('click', function (event) {
      event.preventDefault();

      let menu = currentItem.nextElementSibling;
      menu.classList.add('menu--mobile-active');
      burger.classList.add('hamburger--hide');
    });
  });

  backButtom.forEach(function (currentItem) {
    currentItem.addEventListener('click', function (event) {
      event.preventDefault();

      let activeMenu = document.querySelector('.menu--mobile-active');
      if (activeMenu) {
        activeMenu.classList.remove('menu--mobile-active');
        burger.classList.remove('hamburger--hide');
      }
    });
  });
})();
