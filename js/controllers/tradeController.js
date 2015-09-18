app.controller("tradeCtrl", 
  ['$scope', 
   '$stateParams', 
   'selectedDate', 
   'historicalStock', 
   'transactionService',
  function($scope, $stateParams, selectedDate, historicalStock, transactionService){
  $scope.tradeData = {};
  $scope.currentMoney = transactionService.money;

  $scope.calcCost = function(){
    return $scope.calcPrice() * Number($scope.tradeData.quantity);
  }
  $scope.calcPrice = function(){
    return historicalStock.getPrice(selectedDate.dates.currentDate, $scope.tradeData.symbol);
  }
  $scope.tradeData.symbol = $stateParams.symbol;
  $scope.tradeData.date = selectedDate.dates.currentDate;

  $scope.createTranscation = function() {
    var tradeRecord = JSON.parse(JSON.stringify($scope.tradeData));
    tradeRecord.Date = $scope.tradeData.date;
    tradeRecord.cost = Number($scope.calcCost());
    tradeRecord.price = Number($scope.calcPrice());
    tradeRecord.quantity = Number(tradeRecord.quantity);
    transactionService.addTransaction(tradeRecord);
  }

  $scope.validBuy = function() {
    return $scope.tradeData.action == "true" && $scope.calcCost() <= $scope.currentMoney.total;
  }

  $scope.validSell = function() {
    return true;
  }
}]);
