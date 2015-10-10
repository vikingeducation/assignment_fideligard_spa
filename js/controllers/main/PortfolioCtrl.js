fideligard.controller('PortfolioCtrl',
  ['$scope', '$state', 'portfolio', 'stockManager', 'stockCalculator', 'dateService',
  function($scope, $state, portfolio, stockManager, stockCalculator, dateService) {


    $scope.init = function() {
      $scope.selectedState = $state.current.name;

      $scope.sort = "date";
      $scope.sortDescending = false;

      $scope.getData();

      // service needs to be on $scope in order to be $watched
      $scope.date = dateService;
      $scope.$watch('date.currentDate', $scope.setDate );

      $scope.manager = stockManager;
      $scope.$watch('manager.fullyLoaded', $scope.getData );
    };


    $scope.setDate = function(newDate, oldDate) {
      $scope.currentDate = newDate;
      portfolio.buildUp(newDate, 0);
      $scope.getData();
    };


    // currently not sorting on function fields properly???

    // get portfolio data
    $scope.getData = function() {
      if (stockManager.fullyLoaded) {
        $scope.portfolio = portfolio.present();
        $scope.portfolio.forEach( function(stock) {
          if (stock.symbol !== 'CASH') {
            var priceInfo = stockCalculator.generate(stockManager.stockData[stock.symbol], $scope.currentDate);
            stock.currentPrice = priceInfo.price;
            stock.priceChange1day = priceInfo.priceChange1day;
            stock.priceChange7day = priceInfo.priceChange7day;
            stock.priceChange30day = priceInfo.priceChange30day;
          };
          // need to save this info in stock calc/mgr so it's easier to get?
        })
      };
    }



    $scope.toggleSort = function(column) {
      if (column === $scope.sort) {
        $scope.sortDescending ^= true;
      } else {
        $scope.sort = column;
        if (column === 'symbol') {
          $scope.sortDescending = false;
        } else {
          $scope.sortDescending = true;
        }
      };
    };


    $scope.getIcon = function(column) {
      if ($scope.sort === column) {
        return $scope.sortDescending
          ? 'glyphicon-chevron-up'
          : 'glyphicon-chevron-down';
      };
    };


    $scope.routeTo = function(state) {
      $state.go(state);
    };


    $scope.init();

}]);