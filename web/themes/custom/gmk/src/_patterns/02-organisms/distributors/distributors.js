/**
 * @file
 * Js for distributors map functionality.
 */

(function() {
  const map = document.querySelector('.distributors-map');
  const showMap = document.querySelector('.show-map');
  const showList = document.querySelector('.show-list');

  // Initialize scroller.
  new overflowScroller('vertical');

  showMap.addEventListener('click', function() {
    map.classList.add('distributors-map--fixed');
    Drupal.geolocation.maps[0].leafletMap.invalidateSize();
    Drupal.geolocation.maps[0].leafletMap.setZoom(8);
  });

  showList.addEventListener('click', function() {
    map.classList.remove('distributors-map--fixed');
  });
} ())
