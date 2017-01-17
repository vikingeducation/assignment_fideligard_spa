Fideligard.controller('TransactionCtrl', ['$scope', 'stockService', 'dateService', 'transactionService', '$stateParams',
  function($scope, stockService, dateService, transactionService, $stateParams ) {
    $scope.transactions = transactionService.getTransactions();
    $scope.propertyName = 'date';
    $scope.reverse = true;

    $scope.sortBy = function(propertyName) {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };
}]);
