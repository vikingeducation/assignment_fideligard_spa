app.controller('StocksCtrl',
['stocks', '$scope', 'StockService', 'DateService', 'dates',
function(stocks, $scope, StockService, DateService, dates) {


  $scope.dateInfo = DateService.getDateInfo();
  $scope.stocksInfo = StockService.getStocks('2015-01-02');
  $scope.sliderLength = dates.length - 1;

  $scope.setDate = function() {
    DateService.setDate($scope.newDate);
    $scope.stocksInfo = StockService.getStocks($scope.dateInfo.currentDate);
  };

  // $scope.$watch('currentDate', function(){
  //   console.log("watch firing");
  //   $scope.currentStocks = stocks[$scope.dateInfo.currentDate];
  // })

}]);

