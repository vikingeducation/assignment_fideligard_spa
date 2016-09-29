app.directive('stockTicker', ['StocksService', function(StocksService) {
	return{
		restrict: "E",
		templateUrl: 'js/templates/stockTicker.html',
		scope: {
			stock: "=",
      symbol: "="
		},
    link: function(scope) {
      scope.currentPrice = StocksService.currentPrice(scope.symbol);
      scope.thirtyDay = StocksService.thirtyDayAverage(scope.symbol);
      scope.sevenDay = StocksService.sevenDayAverage(scope.symbol);
    }
	};
}]);
