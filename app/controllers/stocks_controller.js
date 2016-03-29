stocks.controller('StocksCtrl', ['$scope', '$stateParams', 'PortfolioService', function($scope, $stateParams, PortfolioService) {

  PortfolioService.initializeHistoricalData();
  $scope.stocks = PortfolioService.getStocks();
  // console.log($scope.stocks);


}]);
