(function () {
  const slider = tns({
    container: '.js-card-carousel',
    speed: 400,
    nav: false,
    edgePadding: 20,
    items: 1,
    responsive: {
      600: {
        edgePadding: 20,
        items: 2
      },
      1000: {
        items: 3,
        edgePadding: 50,
      },
      1200: {
        items: 4
      }
    }
  });
})();

