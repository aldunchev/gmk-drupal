!function(e,o){if("function"==typeof define&&define.amd)define(["exports"],o);else if("undefined"!=typeof exports)o(exports);else{var t={};o(t),e.bodyScrollLock=t}}(this,function(exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=!1;if("undefined"!=typeof window){var e={get passive(){t=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}var n="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&1<window.navigator.maxTouchPoints),i=[],d=!1,l=-1,c=void 0,s=void 0,u=void 0,a=function(o){return i.some(function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(o))})},v=function(e){var o=e||window.event;return!!a(o.target)||(1<o.touches.length||(o.preventDefault&&o.preventDefault(),!1))},r=function(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==c&&(document.body.style.overflow=c,c=void 0)},f=function(){if(void 0!==s){var e=-parseInt(document.body.style.top,10),o=-parseInt(document.body.style.left,10);document.body.style.position=s.position,document.body.style.top=s.top,document.body.style.left=s.left,window.scrollTo(o,e),s=void 0}};exports.disableBodyScroll=function(r,e){if(r){if(!i.some(function(e){return e.targetElement===r})){var o={targetElement:r,options:e||{}};i=[].concat(function(e){if(Array.isArray(e)){for(var o=0,t=Array(e.length);o<e.length;o++)t[o]=e[o];return t}return Array.from(e)}(i),[o]),n?window.requestAnimationFrame(function(){if(void 0===s){s={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,o=e.scrollY,t=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-o,document.body.style.left=-t,setTimeout(function(){return window.requestAnimationFrame(function(){var e=n-window.innerHeight;e&&n<=o&&(document.body.style.top=-(o+e))})},300)}}):function(e){if(void 0===u){var o=!!e&&!0===e.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;if(o&&0<t){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);u=document.body.style.paddingRight,document.body.style.paddingRight=n+t+"px"}}void 0===c&&(c=document.body.style.overflow,document.body.style.overflow="hidden")}(e),n&&(r.ontouchstart=function(e){1===e.targetTouches.length&&(l=e.targetTouches[0].clientY)},r.ontouchmove=function(e){var o,t,n,i;1===e.targetTouches.length&&(t=r,i=(o=e).targetTouches[0].clientY-l,!a(o.target)&&(t&&0===t.scrollTop&&0<i?v(o):(n=t)&&n.scrollHeight-n.scrollTop<=n.clientHeight&&i<0?v(o):o.stopPropagation()))},d||(document.addEventListener("touchmove",v,t?{passive:!1}:void 0),d=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},exports.clearAllBodyScrollLocks=function(){n&&(i.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),d&&(document.removeEventListener("touchmove",v,t?{passive:!1}:void 0),d=!1),l=-1),n?f():r(),i=[]},exports.enableBodyScroll=function(o){o?(i=i.filter(function(e){return e.targetElement!==o}),n&&(o.ontouchstart=null,o.ontouchmove=null,d&&0===i.length&&(document.removeEventListener("touchmove",v,t?{passive:!1}:void 0),d=!1)),n?f():r()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}});
;
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
;
/**
 * #file
 * Handle horizonral scroll of menus or other widgets.
 */

(function () {
  const overflowElement = document.querySelector('.overflow-element');
  const overflowWrapper = document.querySelector('.overflow-wrapper');

  overflowElement.addEventListener('scroll', function () {
    Math.round(this.scrollWidth) === Math.round(this.scrollLeft + this.clientWidth) ? overflowWrapper.classList.add('overflow-wrapper--end') : overflowWrapper.classList.remove('overflow-wrapper--end');
  });
})();
;
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
;
