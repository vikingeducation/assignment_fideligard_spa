app.controller('TradeCtrl',
['stocks', '$scope', 'StockService', 'DateService', 'dates', '$stateParams', 'PortfolioService', "$state", 
function(stocks, $scope, StockService, DateService, dates, $stateParams, PortfolioService, $state) {

  $scope.dateInfo = DateService.getDateInfo();
  $scope.symbol = $stateParams.symbol;
  $scope.price = $stateParams.price;
  $scope.date = $stateParams.date;
  $scope.quantity = 1;
  $scope.buySell = 1;
  $scope.portfolio = PortfolioService.getPortfolio();
  $scope.currentPortfolio = $scope.portfolio[$scope.date]
  $scope.cash = $scope.currentPortfolio.cash

  $scope.submitOrder = function(){
    var success = PortfolioService.placeOrder({
      date: $scope.date,
      quantity: $scope.quantity,
      price: $scope.price,
      symbol: $scope.symbol,
      buySell: $scope.buySell
    })
    if (success) {
      $scope.tradePreventer = '';
      $state.go('stocks.transactions')
    } else {
      console.log("Not enough dough doe")
      $scope.tradePreventer = "This order can't be placed as it does not leave you enough cash for a future trade you've already placed. Either reduce the amount of remove some future trades."
    }

  };



}]);

  // $scope.dateInfo = DateService.getDateInfo();

  // $scope.setDate = function() {
  //   DateService.setDate($scope.newDate);
  //   $scope.stocksInfo = StockService.getStocks($scope.dateInfo.currentDate);
  // };

  // $scope.$watch('currentDate', function(){
  //   console.log("watch firing");
  //   $scope.currentStocks = stocks[$scope.dateInfo.currentDate];
  // })