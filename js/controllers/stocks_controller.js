financialApp.controller('StocksCtrl', ['$scope', 'dateService', 'stockService', function($scope, dateService, stockService){

  $scope.dateInfo = dateService.getDateInfo();
  $scope.stockData = stockService.getStockData();
  $scope.currentDate = $scope.dateInfo.currentDate;
  $scope.dateString = $scope.currentDate.getMonth() + "-" + $scope.currentDate.getDate() + "-" + $scope.currentDate.getYear();
  $scope.currentDateStock = $scope.stockData[$scope.dateString];

  console.log($scope.currentDateStock)

}]);
