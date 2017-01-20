Fideligard.controller('PortfolioCtrl', ['$scope', 'stockService', 'dateService', 'transactionService', 'userStocks',
  function($scope, stockService, dateService, transactionService, userStocks ) {

    $scope.userStocks = userStocks;

    $scope.propertyName = 'key';
    $scope.reverse = true;

    $scope.currentCash = transactionService.getCashAvailable();



    $scope.currentPrice = function(stock) {
      var date = dateService.getCurrent();
      return stockService.getCurrentPrice(stock.key, date.toISO());
    }

    $scope.oneDayChange = function(stock) {
      var date = dateService.getCurrent();
      return stockService.stockChange(stock.key, date.toISO(), 1);
    }

    $scope.sevenDayChange = function(stock) {
      var date = dateService.getCurrent();
      return stockService.stockChange(stock.key, date.toISO(), 7);
    }

    $scope.thirtyDayChange = function(stock) {
      var date = dateService.getCurrent();
      return stockService.stockChange(stock.key, date.toISO(), 30);
    }

    $scope.sortBy = function(propertyName) {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };

    $scope.aggregate = function() {
      var costBasis = 0;
      var currentValue = 0;
      var profitLoss = 0;
      var agg1dayChange = 0;
      var agg7dayChange = 0;
      var agg30dayChange = 0;
      angular.forEach($scope.userStocks, function(stock, key) {
        costBasis += stock.costBasis;
        currentValue += (stock.quantity * $scope.currentPrice(stock));
        profitLoss += stock.profitLoss;
        agg1dayChange += $scope.oneDayChange(stock);
        agg7dayChange += $scope.sevenDayChange(stock);
        agg30dayChange += $scope.thirtyDayChange(stock);
      });
      return { costBasis: costBasis,
               currentValue: currentValue,
               profitLoss: profitLoss,
               agg1dayChange: agg1dayChange,
               agg7dayChange: agg7dayChange,
               agg30dayChange: agg30dayChange
             };
    }
    $scope.aggData = $scope.aggregate();
    $scope.$on('date.updated', function () {
      $scope.aggData = $scope.aggregate();
    });
}]);
