Fideligard.controller('TransactionCtrl', ['$scope', 'transactionService', function($scope, transactionService){

  $scope.transactions = transactionService.getTransactions();
  $scope.sorter;
  $scope.reverser;

  $scope.sortBy = function(type) {
    if ($scope.sorter === type) {
      $scope.reverser = !$scope.reverser;
    } else {
      $scope.sorter = type;
      $scope.reverser = false;
    }
  };

}]);