/**
 * #file
 * Handle scroll of brands.
 */

(function () {
  const brandFieldsWrapper = document.querySelector('.field--name-field-brands');
  const brandsWrapper = document.querySelector('.brands-wrapper');

  brandFieldsWrapper.addEventListener('scroll', function () {
    this.scrollWidth === this.scrollLeft + this.clientWidth ? brandsWrapper.classList.add('brands-wrapper--end') : brandsWrapper.classList.remove('brands-wrapper--end');
  });
})();
