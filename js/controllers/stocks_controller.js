financialApp.controller('StocksCtrl', ['$scope', 'dateService', 'stockService', function($scope, dateService, stockService){

  $scope.dateInfo = dateService.getDateInfo();
  $scope.stockData = stockService.getStockData();
 

  $scope.currentDate = $scope.dateInfo.currentDate;
  
  console.log("currentdate" + $scope.currentDate)
  
  $scope.dateString = $scope.dateInfo.getDateString();

  console.log($scope.dateString);

  $scope.currentDateStock = $scope.stockData[$scope.dateString];

  console.log($scope.stockData);
  console.log($scope.currentDateStock)

}]);
