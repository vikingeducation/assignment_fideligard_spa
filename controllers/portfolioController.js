app.controller("portfolioCtrl",
  ['$scope', 'stocks', 'portfolioService', 'dateService',
  function($scope, stocks, portfolioService, dateService) {
    $scope.date = dateService.getDate();
    $scope.allStocks = stocks;

    // creates portfolio for this date
    portfolioService.createPortfolio( $scope.date);
    $scope.portfolio = portfolioService.getPortfolio($scope.date);
    
    
    // $scope.stockNames = portfolioService.getNamesOfStocks($scope.date);

    console.log('here portfolio: ', $scope.portfolio);
    // console.log('here stock names: ', $scope.stockNames);
}]);
