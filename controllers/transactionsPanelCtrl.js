fideligardApp.controller("transactionsPanelCtrl", ["$scope", "portfolioService", function($scope, portfolioService) {

  $scope.transactions = portfolioService.transactionHistory();

  

}])