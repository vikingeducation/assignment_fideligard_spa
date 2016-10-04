Fideligard.controller('RangeCtrl', ['$scope', 'yqlService', 'dateService', function($scope, yqlService, dateService){

  $scope.index;
  $scope.quotes = yqlService.getStocks();
  $scope.dates = yqlService.getDates();
  $scope.setDate = function(day) {
    dateService.setDate(day);
  }

}]);