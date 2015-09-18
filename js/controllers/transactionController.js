app.controller("transactionCtrl", 
  ['$scope', 
   'transactionService', 
    function($scope, transactionService){
      $scope.transactions = transactionService.transactions;
    }
]);
