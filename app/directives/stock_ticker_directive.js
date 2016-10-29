fideligard.directive('stockTicker', ["StockService", "DateService", function(StockService, DateService){


  return{
    restrict: 'AE',
    templateUrl: '/app/templates/stock_template.html',
    scope: {
      stock: '=',
    },
    link: function(scope, element, attrs) {
      scope.currentDate =  DateService.getDate()
      scope.updateStock = function() {
        var formattedTime = scope.currentDate.time.toISOString().substring(0,10);
        scope.currentStock = scope.stock[formattedTime]
        var rawSym = scope.currentStock.Symbol
        scope.symbol = rawSym.substring(0, rawSym.length-3);
        scope.oneDay = StockService.stockChange(rawSym, formattedTime, 1);
        scope.sevenDay = StockService.stockChange(rawSym, formattedTime, 7);
        scope.thirtyDay = StockService.stockChange(rawSym, formattedTime, 30);

      }
      scope.$watch('currentDate.time', function(){
        scope.updateStock();
      })
      scope.updateStock();
    }
  }

}]);
