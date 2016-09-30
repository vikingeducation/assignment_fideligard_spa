fideligardApp.controller('stocksPanelCtrl', ['$scope', 'stocksService', 'dateService', function($scope, stocksService, dateService){

  stocksService.all().then(function(stocks) {
    $scope.stocks = stocksService.getStocks();
    $scope.dates = stocksService.allDates();
    console.log($scope.stocks);
  });

  $scope.date = dateService.getSelectedDate();


  
}]);
