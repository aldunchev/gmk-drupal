/**
 * #file
 * Handle horizonral scroll of menus or other widgets.
 */

/**
 * Function to remove class at the of scroll area.
 * @param {direction} direction 
 */
const overflowScroller = function(direction) {
  const overflowElement = document.querySelector('.overflow-element');
  const overflowWrapper = document.querySelector('.overflow-wrapper');

  // Do nothing if no scroll.
  if (overflowElement.scrollHeight <= overflowWrapper.clientHeight) {
    overflowWrapper.classList.add('overflow-wrapper--no-scroll');
    return false;
  }

  if (!direction) {
    throw 'Please specify direction, either "horizontal" or "vertical".';
  }
  overflowElement.addEventListener('scroll', function () {
    let scrollPosition = direction === 'horizontal' ? this.scrollLeft : this.scrollTop;
    let scrollDimension = direction === 'horizontal' ? this.scrollWidth : this.scrollHeight;
    let clientDimension = direction === 'horizontal' ? this.clientWidth : this.clientHeight;
    // Math.round(this.scrollWidth) === Math.round(this.scrollLeft + this.clientWidth) ? overflowWrapper.classList.add('overflow-wrapper--end') : overflowWrapper.classList.remove('overflow-wrapper--end');
    Math.round(scrollDimension) === Math.round(scrollPosition + clientDimension) ? overflowWrapper.classList.add('overflow-wrapper--end') : overflowWrapper.classList.remove('overflow-wrapper--end');
  });
}

