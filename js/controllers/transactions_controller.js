StockApp.controller("TransactionsCtrl", ['$scope', 'transactionService', function($scope, transactionService){
  
  $scope.sort = "symbol";
  $scope.setSort = function(sortType){
    if($scope.sort === sortType){
      $scope.sort = "-" + sortType;
    } else {
      $scope.sort = sortType;
    }
  };



  $scope.transactions = transactionService.allTransactions();
}]);