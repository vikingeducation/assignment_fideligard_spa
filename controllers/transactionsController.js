app.controller("transactionsCtrl",
  ['$scope', 'portfolioService',
  function($scope, portfolioService) {

    $scope.reverse = false;
    $scope.orderCol = "";
    $scope.nameFilter = "";

    console.log("transactions: ", portfolioService.getTransactions());

    $scope.transactions = portfolioService.getTransactions();

    $scope.toggle = function() {
      console.log('orderby: ', $scope.orderCol);
      console.log("toggled: ", $scope.reverse);
      $scope.reverse = !($scope.reverse);
    }

}]);
