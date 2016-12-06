angular.module('StockPortfolioSimulator').controller('TransactionsController', ['$scope', '$state', 'TransactionsService', function($scope, $state, TransactionsService){

	// ---------------------
	// Private
	// ---------------------

	// ---------------------
	// Public
	// ---------------------

	$scope.filterText = "";
	$scope.orderExpression = 'date';
	$scope.reverse = false;
	$scope.transactions = TransactionsService.getTransactions();

	$scope.viewName = "transactions";

  // Need this setTimeout here
  // as the ng-change whichi calls this function
  // runs beore the ng-model change seems to happen
  $scope.changeView = function(){
    setTimeout(function(){
      $state.go( $scope.viewName );
    })
  };

}]);