app.controller("stocksCtrl",
  ['$scope','stocks',
  function($scope, stocks) {

  $scope.nameFilter = "";
  $scope.allStocks = stocks;
}]);
