app.directive("portfolioRow",
  ['dateService', 'portfolioService', 'stockService',
  function(dateService, portfolioService, stockService){
  return {
    templateUrl: "directives/portfolioDirective.html",
    restrict: "A",
    scope: {
      stock: '='
    },
    link: function(scope){
      scope.stocks = stockService.getCurrentStocks();

      scope.tradeDay = function() {
        return stockService.getDay();
      };

      scope.getDayPrice = function() {
        return scope.stocks[scope.stock.symbol][2014].days[scope.tradeDay()].Open;
      }

      scope.getDayAnalytics = function(numDays){
        var numDays = numDays || 1;
        numDays--;

        console.log(scope.stocks);

        var intialDay = scope.stocks[scope.stock.symbol][2014].days[scope.tradeDay() - numDays].Open;
        var finalDay = scope.stocks[scope.stock.symbol][2014].days[scope.tradeDay()].Close;


        return finalDay - intialDay;
      };
    }
  };
}]);
