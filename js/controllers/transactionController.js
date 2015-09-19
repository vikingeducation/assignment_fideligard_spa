app.controller("transactionCtrl", ['$scope', 'transactionService', function($scope, transactionService){
  $scope.transactions = transactionService.transactions;

  $scope.sortCriteria = "";
  $scope.reverse = false;

  $scope.sortBy = function(criteria){
    var columns = {
      1: "date",
      2: "symbol",
      3: "action",
      4: "quantity",
      5: "price"
    }
    if (!columns[criteria]) return;

    if (columns[criteria] == $scope.sortCriteria){
      $scope.reverse = !$scope.reverse;
    } else {
      $scope.sortCriteria = columns[criteria];
      $scope.reverse = false;
    }
  }
}]);
