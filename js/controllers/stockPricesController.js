simulator.controller('StockPricesCtrl', ['$scope', 'portfolioDates', 'stockPrices', 
  function($scope, portfolioDates, stockPrices){
  
  $scope.dates = portfolioDates;
  $scope.sort = { orderBy: 'symbol', orderByReverse: false };

  $scope.headers = [
    {label: 'Symbol', orderBy: 'symbol'},
    {label: 'Price',  orderBy: 'price'},
    {label: '1d',     orderBy: 'day1.diff'},
    {label: '7d',     orderBy: 'day7.diff'},
    {label: '30d',    orderBy: 'day30.diff'},
  ];

  $scope.$watch('dates.selected', function(newVal){
    $scope.quotes = stockPrices.historical($scope.dates.selected);
  });

}]);