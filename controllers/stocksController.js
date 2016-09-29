app.controller("stocksCtrl",
  ['$scope', 'dateService','stockService', 'stocks',
  function($scope, dateService, stockService, stocks) {

  $scope.allStocks = stocks || stockService.getStocks().then(function(data) {
    return data
  });

  console.log($scope.allStocks);
}]);
