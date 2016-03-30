fideligard.controller('StocksCtrl', ['$scope', 'StocksService', 'DatePickerService', function($scope, StocksService, DatePickerService) {


  $scope.stocks = [];

  // TODO: move into StocksService so it can be reused
  var constructStocks = function() {
    var promises = StocksService.getStocks();
    for (var i = 0; i < promises.length; i++ ) {
      promises[i].then(function(data){
        console.log("API call was successful.")
        $scope.stocks = StocksService.constructStocks(data)
        // console.log($scope.stocks)
      }, function() {
        console.log("API call was unsuccessful.")
      })
    }
  }

  $scope.getDate = function(stock, date) {
    return stock[date];
  }


  $scope.stocks = constructStocks();


  $scope.date = String(DatePickerService.date);


  $scope.$watch(function() {
      return DatePickerService.date;
    },
    function(newValue) {
      $scope.date = newValue - 28800000;
      console.log("stocks controller date was changed to: "+ $scope.date)
    });


}]);