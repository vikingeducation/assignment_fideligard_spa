"use strict";
app.directive('portfolioRow', ['StocksService', 'accountService', function(StocksService, accountService){
	return{
		restrict: "A",
		templateUrl: "js/templates/portfolioRow.html",
		scope: {
			stock: "=",
			symbol: "="
		},
		link: function(scope){
			scope.currentPrice = StocksService.currentPrice(scope.symbol);
			scope.currentValue = scope.stock.quantity * scope.currentPrice;
			scope.costBasis = scope.stock.moneySpent - scope.stock.moneyEarned;
			scope.profitLoss = scope.currentValue - scope.costBasis;
			scope.thirtyDay = StocksService.priceChange(scope.symbol, 30);
			scope.sevenDay = StocksService.priceChange(scope.symbol, 7);
      scope.oneDay = StocksService.priceChange(scope.symbol, 1);
		}
	};

}]);