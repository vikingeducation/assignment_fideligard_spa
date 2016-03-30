fideligard.directive('stockRow', function() {
  return {
    templateUrl: 'directives/templates/stockDirective.html',
    restrict: 'AE',
    scope:
    {
      stock: "=",
      stockDate: "=",
      stockData: "="
    }
  }
});