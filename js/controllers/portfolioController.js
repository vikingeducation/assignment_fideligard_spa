fideligard.controller('portfolioCtrl',
  ['$scope',
  'transactionService',
  'portfolioService',
    function(
      $scope,
      transactionService,
      portfolioService) {
      $scope.transactions = transactionService.getTransactions();

      $scope.portDaysAgo = function(transaction, properDate, daysAgoFromToday){
        return portfolioService.daysAgo(transaction, properDate, daysAgoFromToday);
      };
    }
  ]);
