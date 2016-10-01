app.directive("stockRow", ['stockService', function(stockService){
  return {
    templateUrl: "directives/stockDirective.html",
    restrict: "A",
    scope: {
      stock: "="
    },
    link: function(scope){
      scope.tradeDay = function() {
        return stockService.getDay();
      };

      scope.getDayAnalytics = function(numDays){
        var numDays = numDays || 1;
        numDays--;

        var intialDay = scope.stock[2014].days[scope.tradeDay() - numDays].Open;
        var finalDay = scope.stock[2014].days[scope.tradeDay()].Close;


        return finalDay - intialDay;
      };
    }
  };
}]);
