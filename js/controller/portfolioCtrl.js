StockSimulator.controller('portfolioCtrl', ['$scope', 'transactionService', function ($scope, transactionService) {

	$scope.userStocks = transactionService.getUserStocks();

	$scope.userCash = transactionService.getCash();

}]);
