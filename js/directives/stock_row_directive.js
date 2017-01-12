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
        var formattedDate = dateService.getValidFormattedDate(scope.date);
        scope.currentStock = scope.stock[formattedDate];
        if (scope.currentStock) {
        var rawSym = scope.currentStock.Symbol;
          scope.symbol = rawSym.substring(0, rawSym.length-3);
          scope.price = scope.currentStock.Close;
          scope.oneDay = stockService.stockChange(rawSym, formattedDate, 1);
          scope.sevenDay = stockService.stockChange(rawSym, formattedDate, 7);
          scope.thirtyDay = stockService.stockChange(rawSym, formattedDate, 30);
        }
      }

      scope.$watch('date', function(){
        scope.updateStock();
      })
      scope.updateStock();
    }
  }

}]);