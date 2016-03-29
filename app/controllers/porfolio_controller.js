stocks.controller('PortfolioCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {

  portfolioService.setupPorfolio();
  $scope.stocks = portfolioService.getStocks();
  
}]);
