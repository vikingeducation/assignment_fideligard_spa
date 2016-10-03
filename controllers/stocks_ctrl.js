Fideligard.controller('StocksCtrl', ['$scope', 'yqlService', 'dateService', function($scope, yqlService, dateService){

  $scope.quotes = yqlService.getStocks();
  $scope.dates = yqlService.getDates();
  $scope.date = dateService.getDate();
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
}]);