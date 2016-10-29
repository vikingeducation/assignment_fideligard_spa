fideligard.controller('StockCtrl', ['$scope', 'StockService',
'stocks', 'DateService', function($scope, StockService, stocks, DateService){

  $scope.stocks = stocks;
  $scope.date = DateService.getDate().time;


}])
