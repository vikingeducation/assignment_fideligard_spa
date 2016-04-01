fideligard.controller('TransactionsCtrl', ['$scope', 'TransactionsService', function($scope, TransactionsService){


  $scope.transactions = TransactionsService.transactions;

  $scope.filterByName = '';



}])