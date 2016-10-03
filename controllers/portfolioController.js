app.controller("portfolioCtrl",
  ['$scope', 'stocks', 'portfolioService', 'dateService',
  function($scope, stocks, portfolioService, dateService) {
    $scope.date = dateService.getDate();
    $scope.allStocks = stocks;

    // creates portfolio for this date
    portfolioService.createPortfolio( $scope.date);
    $scope.portfolio = portfolioService.getPortfolio($scope.date);

    console.log('here portfolio: ', $scope.portfolio);
}]);
