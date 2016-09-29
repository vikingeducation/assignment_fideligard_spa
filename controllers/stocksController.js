app.controller("stocksCtrl",
  ['$scope', 'dateService','stockService', 'stocks',
  function($scope, dateService, stockService, stocks) {

  // $scope.getStockPrices = function() {
  //   return stockService.getStocks().then(function(response){
  //     return;
  //   });
  // };
  console.log(stocks);
  // $scope.stockPrices = $scope.getStockPrices();
}]);
