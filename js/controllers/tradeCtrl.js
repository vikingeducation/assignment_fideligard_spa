fideligard.controller("tradeCtrl",['$scope', '$http', 'stocks', 'date',function($scope, $http, stocks, date){


  $scope.viewDate = date.yesterday();
  $scope.price = 0;
  $scope.quantity = 0;
  $scope.cash =10000;
  $scope.buyOrSell = "Buy";

  $scope.buy = function(){
    if (validateBuy()){
      $scope.cash -= $scope.price * $scope.quantity;
    }
  };


  $scope.sell = function(){
    if (validateSale()){
      $scope.cash += $scope.price * $scope.quantity;
    }
  };

  var validateBuy = function(){
    if ($scope.cash >= $scope.price * $scope.quantity) return true;
  };

  var validateSale = function(){
    return true;
  };

  $scope.validateTransaction = function (arg) {
    console.log(arg)
    if (arg === "Buy" && validateBuy()) return true;
    if (arg === "Sell" && validateSale()) return true;
    return false;
  };

  $scope.updatePrice = function(){
    console.log('update price');
    if ($scope.symbol && $scope.viewDate) {
      $scope.price = stocks.getPrice($scope.symbol, date.getDateStr($scope.viewDate))
    }
  }

$scope.$watch(date.getDate, function(newDate, oldDate) {
  $scope.viewDate = newDate;
  $scope.updatePrice()

});

$scope.symbols = stocks.symbols


$scope.updateDate = function(){
  if ($scope.viewDate > date.yesterday()) $scope.viewDate = date.yesterday();
  if ($scope.viewDate < date.oneYearAgo()) $scope.viewDate = date.oneYearAgo();
  date.setDate($scope.viewDate);
};





}]);
