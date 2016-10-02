fideligardApp.controller('stocksPanelCtrl', ['$scope', 'stocksService', 'dateService', function($scope, stocksService, dateService){

  $scope.dates = []
  $scope.stocks = {}

  stocksService.all().then(function(stocks) {
    $scope.stocks = stocksService.getStocks();
    $scope.dates = stocksService.allDates();  
  });

  $scope.date = dateService.getSelectedDate();

  $scope.reverse = false
  $scope.propertyName = null

  $scope.sortBy = function(propertyName) {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };

}]);
