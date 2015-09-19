app.controller("portfolioCtrl", 
  ['$scope', 
   'portfolioService', 
   'historicalStock', 
   'selectedDate',
  function($scope, portfolioService, historicalStock, selectedDate){
    $scope.portfolio = portfolioService.portfolioBeforeCurrentDate;
    $scope.selectedDate = selectedDate.dates;
    $scope.overall = portfolioService.overallPortfolio;

    $scope.$watch("selectedDate.currentDate", function(newVal, oldVal){
      portfolioService.calcBeforeCurrentDate(newVal);
      $scope.pre1d = new Date(newVal);
      $scope.pre1d.setDate($scope.pre1d.getDate() - 1);
      $scope.pre30d = new Date(newVal);
      $scope.pre30d.setDate($scope.pre30d.getDate() - 30);
      $scope.pre6mon = new Date(newVal);
      $scope.pre6mon.setDate($scope.pre6mon.getDate() - 180);
    })

  // ---------- Analytics for each symbol ---------------------

    $scope.calcCurrentValue = function(symbol) {
      if ($scope.portfolio[symbol]) {
        return $scope.portfolio[symbol].quantity * 
                Number(historicalStock.getPrice($scope.selectedDate.currentDate, symbol));
      }
    }

    $scope.calcProfit = function(symbol) {
      return calcPriceDif(symbol, $scope.selectedDate.currentDate);
    }

    $scope.calc1d = function(symbol) {
      return calcPriceDif(symbol, $scope.pre1d);
    }

    $scope.calc30d = function(symbol) {
      return calcPriceDif(symbol, $scope.pre30d);
    }

    $scope.calc6mon = function(symbol) {
      return calcPriceDif(symbol, $scope.pre6mon);
    }

    function calcPriceDif(symbol, date) {
      if ($scope.portfolio[symbol]) {
        return  $scope.portfolio[symbol].quantity * 
                Number(historicalStock.getPrice(date, symbol)) - 
                $scope.portfolio[symbol].costBasis;
      }
    }

    // ---------- Overall Analytics ---------------------

    $scope.calcCostBasisTotal = function() {
      var total = 0;
      for (key in $scope.portfolio) {
        total += $scope.portfolio[key].costBasis;
      }
      return total;
    }

    $scope.calcCurrentValueTotal = function() {
      return calcTotal($scope.calcCurrentValue);
    }

    $scope.calcProfitTotal = function() {
      return calcTotal($scope.calcProfit);
    }

    $scope.calc1dTotal = function() {
      return calcTotal($scope.calc1d);
    }

    $scope.calc30dTotal = function() {
      return calcTotal($scope.calc30d);
    }

    $scope.calc6monTotal = function() {
      return calcTotal($scope.calc6mon);
    }

    function calcTotal(calcFunc) {
      var total = 0;
      for (key in $scope.portfolio) {
        total += calcFunc(key);
      }
      return total;
    }

}]);
