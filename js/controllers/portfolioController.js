fideligard.controller('portfolioCtrl',
  ['$scope', 'transactionService', 'portfolioService',
    function($scope, transactionService, analyticService) {
      $scope.transactions = transactionService.getTransactions();

      $scope.portDaysAgo = function(transactions, properDate, daysAgo){
        return portfolioService.daysAgo(transaction, daysAgo);
      };
    }
  ]);
