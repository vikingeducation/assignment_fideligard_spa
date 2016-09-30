"use strict";
app.controller('TransactionsCtrl', ['$scope', 'accountService', function($scope, accountService){

	$scope.transactions = accountService.getTransactions();
	
}]);