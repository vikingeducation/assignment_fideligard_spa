financialApp.controller('StocksCtrl', ['$scope', 'dateService', 'stockService', function($scope, dateService, stockService){

  $scope.dateInfo = dateService.getDateInfo();
  $scope.stockData = stockService.getStockData();

  $scope.currentDate = $scope.dateInfo.currentDate;
  $scope.dateString = $scope.dateInfo.getDateString();
  $scope.currentDateStock = $scope.stockData[$scope.dateString];

}]);
