simulator.controller('StockPricesCtrl', ['$scope', 'portfolioDates', 'stockPrices', 
  function($scope, portfolioDates, stockPrices){
  
  $scope.dates = portfolioDates;
  $scope.sort = { orderBy: 'symbol', orderByReverse: false };

  $scope.headers = [
    {label: 'Symbol', setOrderBy: 'symbol'},
    {label: 'Price',  setOrderBy: 'price'},
    {label: '1d',     setOrderBy: 'day1.diff'},
    {label: '7d',     setOrderBy: 'day7.diff'},
    {label: '30d',    setOrderBy: 'day30.diff'},
  ];

  $scope.$watch('dates.selected', function(newVal){
    $scope.quotes = stockPrices.historical($scope.dates.selected);
  });

}]);