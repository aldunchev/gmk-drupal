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
