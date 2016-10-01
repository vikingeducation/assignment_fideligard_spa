fideligardApp.controller('stocksPanelCtrl', ['$scope', 'stocksService', 'dateService', function($scope, stocksService, dateService){

  $scope.dates = []
  $scope.stocks = {}

  stocksService.all().then(function(stocks) {
    $scope.stocks = stocksService.getStocks();
    $scope.dates = stocksService.allDates();
    console.log($scope.stocks);
    
  });

  $scope.date = dateService.getSelectedDate();

  $scope.reverse = true;
  $scope.propertyName = "Symbol"

  $scope.sortBy = function(propertyName) {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };

}]);
