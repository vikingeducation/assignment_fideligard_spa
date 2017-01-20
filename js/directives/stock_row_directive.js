Fideligard.directive('stockRow', ["stockService", "dateService", function(stockService, dateService){
  return{
    restrict: 'AE',
    templateUrl: 'js/templates/_stock_row.html',
    scope: {
      stock: '=',
      date: '=',
    },
    link: function(scope, element, attrs) {
      scope.currentDate =  dateService.getCurrent();

      scope.updateStock = function() {
        var formattedDate = scope.date.toISO();
        scope.currentStock = scope.stock[formattedDate];
        if (scope.currentStock) {
          var rawSym = scope.currentStock.Symbol;
          scope.symbol = scope.stock.key.substring(0, rawSym.length-3);
          scope.price = scope.currentStock.Close;
          scope.oneDay = stockService.stockChange(scope.symbol, formattedDate, 1);
          scope.sevenDay = stockService.stockChange(scope.symbol, formattedDate, 7);
          scope.thirtyDay = stockService.stockChange(scope.symbol, formattedDate, 30);
        }
      }

      scope.$watch('date', function(){
        scope.updateStock();
      })
      scope.updateStock();
    }
  }

}]);