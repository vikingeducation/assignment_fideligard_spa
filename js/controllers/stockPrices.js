simulator.controller('StockPricesCtrl', ['$scope', 'sharedData', 'stockPrices', 
  function($scope, sharedData, stockPrices){
  
  $scope.dates = sharedData.dates;
  $scope.symbols = sharedData.symbols;

  $scope.$watch('dates.selected', function(newVal){
    $scope.historical = [];
    $scope.symbols.forEach(function(sym){
      $scope.historical.push(stockPrices.historical(sym, $scope.dates.selected));
    });
  });

}]);