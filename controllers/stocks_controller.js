fideligard.controller('StocksCtrl', ['$scope', 'StocksService', function($scope, StocksService) {


  $scope.singleStock = StocksService.singleStockOneYear();

  // $scope.singleStockSingleDay = singleStock[]

  console.log($scope.singleStock)


}]);
