app.directive('stockIndexRow', ['StockService', function(StockService) {

  return {
    restrict: 'A',
    templateUrl: 'js/directives/stock_index_row.html',
    scope: {
      stock: '=',
      day: '=',
      indexStock: '@',
    },
    link: function(scope) {
      // scope.symbol = scope.stock;
      // console.log(scope.stock);
      scope.getAgo = StockService.getPrevious(scope.day,'Close','AAPL');
      scope.oneDayAgo = scope.getAgo(1);
      // scope.sevenDaysAgo = scope.getAgo2014(7)(scope.index,'Close');
      // scope.thirtyDaysAgo = scope.getAgo2014(30)(scope.index,'Close');
    }
  };
}]);
