app.directive("stockRow", ['stockService', function(stockService){
  return {
    templateUrl: "directives/stockDirective.html",
    restrict: "A",
    scope: {
      stock: "="
    },
    link: function(scope){
      console.log(scope.stock);
      console.log(scope.stock[2014].symbol)
      scope.tradeDay = stockService.getDay();

      scope.getDayAnalytics = function(numDays){
        var numDays = numDays || 0;
        var intialDay = scope.stock[2014].dayListings[scope.tradeDay].Open;
        var finalDay = scope.stock[2014].dayListings[scope.tradeDay - numDays].Close;
      }
    }
  };
}]);
