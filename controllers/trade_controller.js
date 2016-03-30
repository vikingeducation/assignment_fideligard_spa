fideligard.controller('TradeCtrl', ['$scope', '$stateParams', 'DatePickerService', 'TradeService', 'StocksService', 'TransactionsService', function($scope, $stateParams, DatePickerService, TradeService, StocksService, TransactionsService) {


  $scope.date = DatePickerService.date


  $scope.cashAvailable = 1000000;


  $scope.validOrder;

  $scope.availableStocks = StocksService.stockSymbols;


  $scope.symbol = $stateParams.symbol;
  $scope.transactionType = "buy";
  $scope.quantity = 1;
  $scope.price = $stateParams.price;
  $scope.getTotalCost = function() {
    return TradeService.calculateCost($scope.price, $scope.quantity);
  };



  $scope.trade = {};


  $scope.createTransaction = function(formIsValid) {
    if (formIsValid) {
      console.log("Create transaction!");
    } else {
      console.log("no good")
    }
  }



}]);