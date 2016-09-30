"use strict";
app.directive('stockTicker', ['StocksService', 'dateService', function(StocksService, dateService) {
	return{
		restrict: "A",
		templateUrl: 'js/templates/stockTicker.html',
		scope: {
      symbol: "="
		},
    link: function(scope) {
    scope.currentDate = dateService.getDate();
    scope.$watch('currentDate.index', function(){
    	scope.currentPrice = StocksService.currentPrice(scope.symbol);
      scope.thirtyDay = StocksService.priceChange(scope.symbol, 30);
      scope.sevenDay = StocksService.priceChange(scope.symbol, 7);
      scope.oneDay = StocksService.priceChange(scope.symbol, 1);
    });
      scope.currentPrice = StocksService.currentPrice(scope.symbol);
      scope.thirtyDay = StocksService.priceChange(scope.symbol, 30);
      scope.sevenDay = StocksService.priceChange(scope.symbol, 7);
      scope.oneDay = StocksService.priceChange(scope.symbol, 1);
    }
	};
}]);
