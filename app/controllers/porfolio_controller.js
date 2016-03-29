stocks.controller('PortfolioCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {

  portfolioService.initializeHistoricalData();
  portfolioService.setupPorfolio();
  $scope.stocks = portfolioService.getStocks();



}]);
