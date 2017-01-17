Fideligard.controller('PortfolioCtrl', ['$scope', 'stockService', 'dateService', 'transactionService', 'userStocks',
  function($scope, stockService, dateService, transactionService, userStocks ) {

    $scope.userStocks = userStocks;

    $scope.propertyName = 'key';
    $scope.reverse = true;

    $scope.sortBy = function(propertyName) {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };
}]);
