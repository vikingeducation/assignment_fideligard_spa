StockApp.controller("TransactionsCtrl", ['$scope', 'transactionService', function($scope, transactionService){
  


  $scope.transactions = transactionService.transactionsByStock();
}]);