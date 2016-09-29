Fideligard.controller('StocksCtrl', ['$scope', 'yqlService', function($scope, yqlService){

  $scope.quotes = yqlService.getStocks();

}]);