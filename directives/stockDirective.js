app.directive("stockRow", ['stockService', function(stockService){
  return {
    templateUrl: "directives/stockDirective.html",
    restrict: "A",
    scope: {
      stock: "="
    },
    link: function(scope){
      scope.tradeDay = stockService.getDay();
      console.log(scope.tradeDay);

      scope.getDayAnalytics = function(numDays){
        var numDays = numDays || 1;
        numDays--;
        var intialDay = scope.stock[2014].days[scope.tradeDay].Open;
        var finalDay = scope.stock[2014].days[scope.tradeDay - numDays].Close;

        return finalDay - intialDay;
      };
    }
  };
}]);
