app.controller("tradeCtrl", 
  ['$scope', '$state','$stateParams', 'stocks', 'stockService', 'portfolioService',
  function($scope, $state, stateParams, stocks, stockService, portfolioService) {

    $scope.myForm = {};

    console.log(stateParams);
    
    var stockName = stateParams.symb;
    $scope.selectStock = stocks[stockName][2014].days[stockService.getDay()];

    console.log($scope.selectStock);

    $scope.total = function() {
      q = parseInt($scope.myForm.quantity) || 0;
      p = $scope.selectStock.Open;
      return q * p;
    };

    $scope.actionStock = function() {
      console.log($scope.myForm)
      debugger;
      var stockObject = {
        symbol: $scope.myForm.symbol,
        price: $scope.myForm.cost,
        quantity: $scope.myForm.quantity,
        date: $scope.myForm.date,
        action: $scope.myForm.action 
      }

      portfolioService.addTransaction(stockObject);

      $state.go('normal.transactions');

    };
}]);
