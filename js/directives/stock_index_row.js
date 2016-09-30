app.directive('stockIndexRow', ['StockService', function(StockService) {

  return {
    restrict: 'A',
    templateUrl: 'js/directives/stock_index_row.html',
    scope: {
      stock: '=',
      index: '@',
    },
    link: function(scope) {
      scope.getAgoAAPL = StockService.getPrevious('AAPL');
      scope.getAgo2014 = scope.getAgoAAPL(2014);
      scope.oneDayAgo = scope.getAgo2014(1)(scope.index,'Close');
      scope.sevenDaysAgo = scope.getAgo2014(7)(scope.index,'Close');
      scope.thirtyDaysAgo = scope.getAgo2014(30)(scope.index,'Close');
    }
  };
}]);
