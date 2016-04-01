fideligard.controller('TradeCtrl', ['$scope', '$stateParams', 'DatePickerService', 'TradeService', 'StocksService', 'TransactionsService', function($scope, $stateParams, DatePickerService, TradeService, StocksService, TransactionsService) {


  $scope.date = DatePickerService.date


  $scope.cashAvailable = 1000000;


  $scope.orderIsValid;


  $scope.validOrder = function() {
    // can't sell what you don't own

    // can't buy more than you have cash available for
    if ($scope.getTotalCost() > $scope.cashAvailable) {
      $scope.orderIsValid = false;
      // console.log($scope.orderIsValid)
      $scope.errorMessage = "You don't have enough money for that trade.";
      return "INVALID";
    } else {
      $scope.orderIsValid = true;
      $scope.errorMessage = undefined;
      // console.log($scope.orderIsValid)
      return "VALID";
    }
    
  };


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
    if (formIsValid && $scope.orderIsValid) {
      console.log("Create transaction!");
      var newTransaction = {
        date: $scope.date,
        symbol: $scope.symbol,
        transactionType: $scope.transactionType,
        quantity: $scope.quantity,
        price: $scope.price
      };
      console.log(newTransaction);
      TransactionsService.transactions.push(newTransaction);
      console.log(TransactionsService.transactions)
    } else {
      console.log("no good")
    }
  }



}]);