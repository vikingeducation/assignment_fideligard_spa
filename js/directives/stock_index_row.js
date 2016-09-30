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
      var day = new Date(scope.day);
      console.log(day);
      console.log(new Date(day.setDate(day.getDate()-1)));
      // scope.getAgoAAPL = StockService.getPrevious('AAPL');
      // scope.getAgo2014 = scope.getAgoAAPL(2014);
      // scope.oneDayAgo = scope.getAgo2014(1)(scope.index,'Close');
      // scope.sevenDaysAgo = scope.getAgo2014(7)(scope.index,'Close');
      // scope.thirtyDaysAgo = scope.getAgo2014(30)(scope.index,'Close');
    }
  };
}]);
