Fideligard.controller('StocksCtrl', ['$scope', 'yqlService', 'dateService', function($scope, yqlService, dateService){

  $scope.quotes = yqlService.getStocks();
  $scope.dates = yqlService.getDates();
  $scope.date = dateService.getDate();

}]);