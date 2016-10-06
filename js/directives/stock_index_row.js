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
      // Dates.
      scope.day = DateService.getDateInfo();
      scope.$watch('day', function() {
        scope.day.currentDate = DateService.getDateInfo().currentDate;
      });
      scope.getAgo = StockService.getPrevious(
        scope.day.currentDate,
        'Close',
        scope.stock.Symbol
      );
      scope.oneDayAgo = scope.getAgo(1);
      scope.sevenDaysAgo = scope.getAgo(7);
      scope.thirtyDaysAgo = scope.getAgo(30);

      // Trade.
      scope.trade = function(ev) {
        StockService.setSelectedStock(scope.stock);
      };
    }
  };
}]);
