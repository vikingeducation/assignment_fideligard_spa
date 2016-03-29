
stocks.directive('stockDisplay', [ function() {

  console.log('stock display directive');

  var def = {
    restrict: 'AE',
    scope: {
      // values: '@',
      // dayDiff: '@',
      difference: '@'
    },
    // scope: true,
    templateUrl: 'app/directives/stock_display.html',
  };
  return def;
}]);
