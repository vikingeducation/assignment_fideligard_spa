app.directive('stockIndexRow',
['StockService', 'DateService',
function(StockService, DateService) {

  return {
    restrict: 'A',
    templateUrl: 'js/directives/stock_index_row.html',
    scope: {
      stock: '=',
      indexStock: '@'
    },
    link: function(scope) {
      scope.day = DateService.getDateInfo();
      scope.$watch('day', function() {
        scope.day.currentDate = DateService.getDateInfo().currentDate;
      });
      scope.getAgo = StockService.getPrevious(scope.day,'Close','AAPL');
      scope.oneDayAgo = scope.getAgo(1);
      scope.sevenDaysAgo = scope.getAgo(7);
      scope.thirtyDayAgo = scope.getAgo(30);
      // scope.sevenDaysAgo = scope.getAgo2014(7)(scope.index,'Close');
      // scope.thirtyDaysAgo = scope.getAgo2014(30)(scope.index,'Close');
    }
  };
}]);
