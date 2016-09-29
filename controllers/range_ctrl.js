Fideligard.controller('RangeCtrl', ['$scope', 'yqlService', function($scope, yqlService){

  $scope.quotes = yqlService.getStocks();

}]);