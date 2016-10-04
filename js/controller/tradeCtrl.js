StockSimulator.controller('tradeCtrl', ['$scope', '$stateParams', 'stockService', 'transactionService', '$state',
	function ($scope, $stateParams, stockService, transactionService, $state) {

		$scope.stock = stockService.findStock($stateParams.id)

		$scope.transaction = {
			symbol: $scope.stock.Symbol,
			type: 'buy',
			date: new Date($scope.stock.Date),
			price: $scope.stock.Close,
			quantity: 0
		};

		$scope.cash = transactionService.getCash();

		$scope.placeOrder = function (formIsValid) {
			if (formIsValid) {
				transactionService.create($scope.transaction);
				$state.go('dashboard.transaction');
			} else {
				alert("Invalid Input!")
			}
		};

		$scope.maxQuantity = function () {
			if ($scope.transaction.type === 'buy') {
				return Math.floor($scope.cash / $scope.transaction.price)
			} else {
				var max = transactionService.getUserStocks()[$scope.transaction.symbol] || 0;
				console.log(transactionService.getUserStocks());
				console.log(max);
				return max;
			}
		};

	}
]);
