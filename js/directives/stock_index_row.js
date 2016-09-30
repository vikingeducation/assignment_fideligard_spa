app.directive('stockIndexRow', ['StockService', function(StockService) {

  return {
    restrict: 'A',
    templateUrl: 'js/directives/stock_index_row.html',
    scope: {
      stock: '=',
      index: '@',
    },
    link: function(scope) {
      scope.getAgo = function(days) {
        return function () {
          if (StockService.getPrevious(scope.index,days,'Close')) {
            return (StockService.getPrevious(scope.index,days,'Close')) ;
          }
        };
      };
      scope.oneDayAgo = scope.getAgo(1);
      scope.sevenDaysAgo = scope.getAgo(7);
      scope.sevenDaysAgo = scope.getAgo(30);
    }
  };
}]);
