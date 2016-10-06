app.controller('StocksTransactionsCtrl',
['$scope', 'TradeService',
function($scope, TradeService) {

  $scope.transactions = TradeService.getTransactions();

}]);
