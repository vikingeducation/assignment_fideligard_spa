simulator.controller('StockPricesCtrl', ['$scope', 'workingDates', 'stockPrices', 
  function($scope, workingDates, stockPrices){
  
  $scope.dates = workingDates;
  $scope.symbols = ["AAPL"];

  $scope.$watch('dates.selected', function(newVal){
    $scope.symbols.forEach(function(sym){
      $scope.historical = stockPrices.historical(sym, $scope.dates.selected);
    });
  });

}]);