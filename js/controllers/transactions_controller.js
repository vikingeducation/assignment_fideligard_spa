app.controller('TransactionsCtrl',
['$scope', 'PortfolioService', function($scope, PortfolioService) {


  $scope.transactions = PortfolioService.getTransactions();

}]);