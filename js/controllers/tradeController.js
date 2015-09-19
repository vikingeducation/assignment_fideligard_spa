app.controller("tradeCtrl", 
  ['$scope', 
   '$stateParams', 
   'selectedDate', 
   'historicalStock', 
   'transactionService',
   'portfolioService',
  function($scope, 
           $stateParams, 
           selectedDate, 
           historicalStock, 
           transactionService, 
           portfolioService){
  $scope.tradeData = {};
  $scope.currentMoney = transactionService.money;

  $scope.calcCost = function(){
    return $scope.calcPrice() * parseInt($scope.tradeData.quantity);
  }
  $scope.calcPrice = function(){
    return historicalStock.getPrice(selectedDate.dates.currentDate, $scope.tradeData.symbol);
  }
  $scope.tradeData.symbol = $stateParams.symbol;
  $scope.tradeData.date = selectedDate.dates;


  $scope.selectedDate = selectedDate.dates;
  $scope.$watch("selectedDate.currentDate", function(newVal, oldVal){
      portfolioService.calcBeforeCurrentDate(newVal);
    })

  $scope.createTranscation = function() {
    var tradeRecord = JSON.parse(JSON.stringify($scope.tradeData));
    tradeRecord.Date = $scope.tradeData.date.currentDate;
    // console.log("date", tradeRecord.Date);
    tradeRecord.cost = Number($scope.calcCost());
    tradeRecord.price = Number($scope.calcPrice());
    tradeRecord.quantity = parseInt(tradeRecord.quantity);
    transactionService.addTransaction(tradeRecord);
    portfolioService.calcOverall();
  }

  $scope.buy = function() {
    return $scope.tradeData.action == 'true';
  }

  $scope.sell = function() {
    return $scope.tradeData.action == 'false';
  }

  $scope.validBuy = function() {
    return $scope.tradeData.action == "true" && $scope.calcCost() <= $scope.currentMoney.total;
  }

  $scope.validSell = function() {
    // console.log($scope.tradeData.symbol)
    // console.log("cur", portfolioService.portfolioBeforeCurrentDate);
    // console.log("cur", portfolioService.portfolioBeforeCurrentDate[$scope.tradeData.symbol].quantity);
    // console.log("overall", portfolioService.overallPortfolio[$scope.tradeData.symbol].quantity);
    return $scope.tradeData.action == "false" && 
           portfolioService.portfolioBeforeCurrentDate[$scope.tradeData.symbol] &&
           parseInt($scope.tradeData.quantity) <= portfolioService.portfolioBeforeCurrentDate[$scope.tradeData.symbol].quantity &&
           portfolioService.overallPortfolio[$scope.tradeData.symbol] &&
           parseInt($scope.tradeData.quantity) <= portfolioService.overallPortfolio[$scope.tradeData.symbol].quantity;
  }

  // $scope.$watch("tradeData", function(){
  //   $scope.setOrderStatus();
  // })

  $scope.setOrderStatus = function() {
    // console.log($scope.validBuy());
    // console.log($scope.validSell());
    if ($scope.validBuy() || $scope.validSell()) {
      $scope.orderStatus = "Valid";
    } else {
      $scope.orderStatus = "Invalid";
    }
  }
}]);
