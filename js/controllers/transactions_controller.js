StockApp.controller("TransactionsCtrl", ['$scope', 'transactionService', function($scope, transactionService){
  
  $scope.sort = "";
  $scope.setSort = function(sortType){

  };

  $scope.transactions = transactionService.allTransactions();
}]);