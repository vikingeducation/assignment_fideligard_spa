stocks.controller('StocksCtrl', ['$http', '$scope', '$stateParams', 'PortfolioService', function($http, $scope, $stateParams, PortfolioService) {

  function date_by_subtracting_days(date, days) {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + days,
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
        );
  }

  $scope.currentSymbols =  PortfolioService.getSymbols();
  console.log( $scope.currentSymbols );

  $scope.currentDate = new Date();
  $scope.stocks = {};
  $scope.currentSymbols.forEach( function(sym){
    $scope.stocks[sym] = {};
    var symbolFileString = '/' + sym + '_data.json'
    $http.get(symbolFileString).then(function(response) {
      response.data.dataset.data.forEach(function(daily) {
        $scope.stocks[sym][daily[0]] = daily[4];
      });
    });
  });


    $http.get('/GE_data.json').then(function(response) {
        console.log('test here');
        console.log(response);
    });

    $http.get('/AAPL_data.json').then(function(response) {
        console.log('test here');
        console.log(response);
    });

  //
  // $scope.stocks.ORCL = {};
  console.log($scope.stocks);


  $scope.stockDifference = function(values, daysAgo) {
    return $scope.closeFor(values,0) - $scope.closeFor(values,daysAgo);
  };

  $scope.closeFor = function(values, daysAgo) {
    if (!daysAgo) {
      daysAgo = 0;
    }
    var value;
    var count = 0;
    while (!value && count > -10) {
      var date = date_by_subtracting_days($scope.currentDate, count - daysAgo);
      var isoDate = date.toISOString().slice(0, 10);
      value = values[isoDate];
      count -= 1;
    }
    return value;
  };
}]);
