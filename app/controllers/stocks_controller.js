stocks.controller('StocksCtrl', ['$scope', '$stateParams', 'PortfolioService', function($scope, $stateParams, PortfolioService) {

  $scope.stocks = PortfolioService.getStocks();
  console.log($scope.stocks);

}]);
