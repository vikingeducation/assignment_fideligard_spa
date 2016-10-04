StockSimulator.controller('stocksCtrl', ['$scope', 'stockService', 'dateService', function ($scope, stockService, dateService) {
	$scope.date = dateService.getCurrent();
	$scope.sort = '';

	$scope.setSort = function (value) {
		$scope.sort = ($scope.sort[0] === '-') ? value : '-' + value;
	};

	$scope.$on('date.updated', function () {
		stockService.updateStocks(dateService.getCurrent()).then(
			function () {
				$scope.stocks = stockService.retriveStocks();
			}
		);
	});

}]);
