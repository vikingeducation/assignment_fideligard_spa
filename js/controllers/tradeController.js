app.controller("tradeCtrl", ['$scope', '$stateParams', 'selectedDate', 'historicalStock', 'transactionService',
  function($scope, $stateParams, selectedDate, historicalStock, transactionService){
  $scope.tradeData = {};
  $scope.currentMoney = transactionService.getMoney();

  $scope.calcCost = function(){
    return $scope.calcPrice() * Number($scope.tradeData.quantity);
  }
  $scope.calcPrice = function(){
    return historicalStock.getPrice(selectedDate.getDate(), $scope.tradeData.symbol);
  }
  $scope.tradeData.symbol = $stateParams.symbol;
  $scope.tradeData.date = selectedDate.getDate;
}]);
