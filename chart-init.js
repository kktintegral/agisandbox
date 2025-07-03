// Make sure this runs after the DOM and Chartist are loaded
document.addEventListener("DOMContentLoaded", function () {
  new Chartist.Line('.ct-chart', {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    series: [
      [5, 9, 7, 8, 5]
    ]
  });
});
