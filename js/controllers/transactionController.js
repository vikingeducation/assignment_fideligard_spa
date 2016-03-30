fideligard.controller('transactionCtrl',
  ['$scope',
  'userService',
  'transactionService',
    function($scope,
      userService,
      transactionService) {

      $scope.transactions = transactionService.getTransactions();
    }
  ]);
