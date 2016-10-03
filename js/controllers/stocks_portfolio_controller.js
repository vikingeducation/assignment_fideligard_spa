app.controller('StocksPortfolioCtrl',
['$scope', 'TradeService', 'PortfolioService',
function($scope, TradeService, PortfolioService) {

  $scope.portfolio = TradeService.getTransactions();

}]);


// 1. currentValue = quantity*price


// 2. costBasis = total money spent to purchase a stock minus total money earned by
// selling it up until that point

// 3. profitLoss = currentValue - costBasis
