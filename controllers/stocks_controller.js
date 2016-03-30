fideligard.controller('StocksCtrl', ['$scope', 'StocksService', 'DatePickerService', function($scope, StocksService, DatePickerService) {


  $scope.stocks = [];


  var moreStocks = function() {
    var promises = StocksService.getStocks();
    for (var i = 0; i < promises.length; i++ ) {
      // console.log(promises[i])
      promises[i].then(function(data){
        console.log("API call was successful.")
        $scope.stocks = StocksService.constructStocks(data)
        console.log($scope.stocks)
      })
    }



  // StocksService.getStocks().then(function(data) {
  //       console.log("made an API call in stocks service")
  //       StocksService.constructStocks(data)
  //       console.log("stocks array in promise: ")
  //       console.log(stocks)
  //       $scope.stocks = StocksService.stocks;
  //     },
  //     function() {
  //       console.log("API call was unsuccessful.")
  //     })
}



  $scope.stocks = moreStocks();

  // $scope.stocks = StocksService.getStocks();

  $scope.date = DatePickerService.date;

  $scope.$watch(function() {
      return DatePickerService.date;
    },
    function(newValue) {
      $scope.date = newValue;
      console.log("stocks controller date was changed to:"+ $scope.date)
    });


}]);
