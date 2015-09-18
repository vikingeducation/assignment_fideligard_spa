fideligard.controller("tradeCtrl",['$scope', '$http', 'stocks', function($scope, $http, stocks){
  $scope.symbols = stocks.symbols;
}]);
