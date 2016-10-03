Fideligard.controller('TransactionCtrl', ['$scope', 'transactionService', '$state', function($scope, transactionService, $state){

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

  $scope.$watch('switch', function(value) {
    if(value) {
      $state.go(value);
    }
  });

}]);