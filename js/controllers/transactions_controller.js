angular.module('StockPortfolioSimulator').controller('TransactionsController', ['$scope', 'TransactionsService', function($scope, TransactionsService){

	// ---------------------
	// Private
	// ---------------------

	// ---------------------
	// Public
	// ---------------------

	$scope.transactions = TransactionsService.getTransactions();
}]);