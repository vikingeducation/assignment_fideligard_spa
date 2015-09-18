app.controller("tradeCtrl", ['$scope', '$stateParams', 'selectedDate', 'historicalStock', 'transactionService',
  function($scope, $stateParams, selectedDate, historicalStock, transactionService){
  $scope.tradeData = {};
  $scope.currentMoney = transactionService.getMoney;
  $scope.tradeData.symbol = $stateParams.symbol;
  $scope.tradeData.date = selectedDate.getDate;

  $scope.displayMoney = function(){
    return $scope.currentMoney($scope.tradeData.date());
  }

  $scope.futureMoney = function(){
    return transactionService.getFutureMoney();
  }

  $scope.calcCost = function(){
    return $scope.calcPrice() * Number($scope.tradeData.quantity);
  }

  $scope.calcPrice = function(){
    return historicalStock.getPrice(selectedDate.getDate(), $scope.tradeData.symbol);
  }

  $scope.createTranscation = function() {
    var tradeRecord = JSON.parse(JSON.stringify($scope.tradeData));
    tradeRecord.date = $scope.tradeData.date();
    tradeRecord.cost = Number($scope.calcCost());
    tradeRecord.price = Number($scope.calcPrice());
    tradeRecord.quantity = Number(tradeRecord.quantity);
    transactionService.addTransaction(tradeRecord);
  }

  $scope.validBuy = function() {
    return $scope.tradeData.action == "true" && transactionService.validateBuy($scope.tradeData.date(), $scope.calcCost());
  }

  $scope.validSell = function() {
    return $scope.tradeData.action != "true" && transactionService.validateSale($scope.tradeData.symbol,
                                           $scope.tradeData.date(),
                                           $scope.tradeData.quantity);
  }
}]);
