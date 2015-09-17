app.controller("MainCtrl", ['$scope', 'historicalStock', function($scope, historicalStock){
  $scope.stockData = historicalStock.getStockData();

  $scope.convertedDate = function(){
    var baseDate = new Date('01/01/2014');
    var startDate = new Date(baseDate);
    startDate.setDate(startDate.getDate()+Number($scope.currentDate));
    return startDate;
  }
}]);
