app.controller("tradeCtrl", 
  ['$scope', '$state','$stateParams', 'stocks', 'stockService', 'portfolioService',
  function($scope, $state, stateParams, stocks, stockService, portfolioService) {

    $scope.myForm = {};

    console.log(stateParams);
    
    var stockName = stateParams.symb;
    $scope.selectStock = stocks[stockName][2014].days[stockService.getDay()];

    console.log('selectStock: ',$scope.selectStock);

    $scope.total = function() {
      q = parseInt($scope.myForm.quantity) || 0;
      p = $scope.selectStock.Open;
      return q * p;
    };

    $scope.actionStock = function() {
      var stockObject = {
        symbol: $scope.selectStock.Symbol,
        price: $scope.selectStock.Open,
        quantity: $scope.myForm.quantity,
        date: $scope.selectStock.Date,
        action: $scope.myForm.action 
      };

      console.log('stockObject: ', stockObject);
     

      portfolioService.addTransaction(stockObject);

      $state.go('normal.transactions');

    };
}]);
