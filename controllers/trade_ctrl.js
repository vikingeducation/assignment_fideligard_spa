Fideligard.controller('TradeCtrl', ['$scope', 'yqlService', 'dateService', '$stateParams', 'portfolioService', 'transactionService', function($scope, yqlService, dateService, $stateParams, portfolioService, transactionService){

  $scope.quotes = yqlService.getStocks();
  $scope.dates = yqlService.getDates();
  $scope.date = dateService.getDate();
  $scope.sym = $stateParams.sym;
  $scope.portfolio = portfolioService.getPortfolio();
  $scope.cash = portfolioService.getCash();
  $scope.transactions = transactionService.getTransactions();

  $scope.validTrade = function() {
    var cost = $scope.quotes[$scope.dates[$scope.date.index]]
              [$scope.sym].Close * $scope.quantity;

    return portfolio.validTrade($scope.sym, $scope.quantity, cost, $scope.choice);
  };

  $scope.makeTrade = function() {
    var cost = $scope.quotes[$scope.dates[$scope.date.index]]
              [$scope.sym].Close * $scope.quantity;

    if ($scope.choice === 'buy') {
      portfolio.makeTrade($scope.sym, $scope.quantity, -cost);
      $scope.addTransaction();
    } else if ($scope.choice === 'sell') {
      portfolio.makeTrade($scope.sym, -$scope.quantity, cost);
      $scope.addTransaction();
    }
  };

  $scope.addTransaction = function() {
    var date = $scope.dates[$scope.date.index];
    var price = $scope.quotes[$scope.dates[$scope.date.index]][$scope.sym].Close
    var sym = $scope.sym;
    var type = $scope.choice;
    var quantity = $scope.quantity;
    transactionService.addTransaction(date, sym, type, quantity, price);
  }

}]);