app.controller("portfolioCtrl", 
  ['$scope', 
   'portfolioService', 
   'historicalStock', 
   'selectedDate',
  function($scope, portfolioService, historicalStock, selectedDate){
    $scope.portfolio = portfolioService.portfolioBeforeCurrentDate;
    $scope.selectedDate = selectedDate.dates;
    $scope.preDate = {};


    $scope.$watch("selectedDate.currentDate", function(newVal, oldVal){
      portfolioService.calcBeforeCurrentDate(newVal);
      $scope.preDate["1"] = new Date(newVal);
      $scope.preDate["1"].setDate($scope.preDate["1"].getDate() - 1);
      $scope.preDate["30"] = new Date(newVal);
      $scope.preDate["30"].setDate($scope.preDate["30"].getDate() - 30);
      $scope.preDate["180"] = new Date(newVal);
      $scope.preDate["180"].setDate($scope.preDate["180"].getDate() - 180);
    })

    $scope.calcCurrentValue = function(symbol) {
      if ($scope.portfolio[symbol]) {
        return $scope.portfolio[symbol].quantity * 
                Number(historicalStock.getPrice($scope.selectedDate.currentDate, symbol));
      }
    }

    $scope.calcProfit = function(symbol) {
      if ($scope.portfolio[symbol]) {
        return  $scope.portfolio[symbol].quantity * 
                Number(historicalStock.getPrice($scope.selectedDate.currentDate, symbol)) - 
                $scope.portfolio[symbol].costBasis; 
      }
    }

    $scope.calc1d = function(symbol) {
      if ($scope.portfolio[symbol]) {
      return  $scope.portfolio[symbol].quantity * 
              Number(historicalStock.getPrePrice($scope.preDate, symbol, "1")) - 
              $scope.portfolio[symbol].costBasis;
            }
    }

    $scope.calc30d = function(symbol) {
      if ($scope.portfolio[symbol]) {
      return  $scope.portfolio[symbol].quantity * 
              Number(historicalStock.getPrePrice($scope.preDate, symbol, "30")) - 
              $scope.portfolio[symbol].costBasis;
            }
    }

    $scope.calc6mon = function(symbol) {
      if ($scope.portfolio[symbol]) {
      return  $scope.portfolio[symbol].quantity * 
              Number(historicalStock.getPrePrice($scope.preDate, symbol, "180")) - 
              $scope.portfolio[symbol].costBasis; 
            }
    }

}]);
