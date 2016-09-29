fideligardApp.controller('stocksPanelCtrl', ['$scope', 'stocksService', function($scope, stocksService){

  stocksService.all().then(function(stocks) {
    $scope.allDays = stocks;
    console.log(stocks);
  });

  $scope.stocks = stockService.all();

}]);
