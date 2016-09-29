app.controller('StocksCtrl',
['date', '$scope', 'StockService', 'DateService',
function(date, $scope, StockService, DateService) {

  StockService.all();

  // console.log(date);
  $scope.date = date;

  $scope.storeDate = function() {
    console.log('this is firing');
    DateService.setDate($scope.selectedDate)
      .then(function(data) {
        $scope.date = data;
      });
  };

}]);
