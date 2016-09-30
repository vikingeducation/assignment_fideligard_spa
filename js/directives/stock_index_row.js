app.directive('stockIndexRow', ['StockService', function(StockService) {

  return {
    restrict: 'A',
    templateUrl: 'js/directives/stock_index_row.html',
    scope: {
      stock: '=',
      // stocks: '@',
      index: '@',
    },
    link: function(scope) {
      scope.getAgo = function(days) {
        return function () {
          if (StockService.getPrevious(scope.index,days,'Close')) {
            return scope.stock['Close'] - (StockService.getPrevious(scope.index,days,'Close'));
          } else {
            return undefined;
          }
        };
      };
      scope.oneDayAgo = scope.getAgo(1);
      scope.sevenDaysAgo = scope.getAgo(7);
    }
  };
}]);
