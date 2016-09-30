app.directive("stockRow", ['stockService', function(stockService){
  return {
    templateUrl: "directives/stockDirective.html",
    restrict: "A",
    scope: {
      stockCloseDate: "@"
    },
    link: function(scope){
      scope.tradeDay = stockService.getDay();

      scope.stocks = stockService.getCurrentStocks();

      scope.getDayAnalytics(numDays){
        var numDays = numDays || 0;
        var intialDay = scope.stock[2014].dayListings[scope.tradeDay].Open;
        var finalDay = scope.stock[2014].dayListings[scope.tradeDay - numDays].Close;
      }
    }
  };
}]);
