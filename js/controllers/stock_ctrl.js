Fideligard.controller('StockCtrl', ['$scope', 'stockService', 'dateService', 'stocks', 'date',
  function($scope, stockService, dateService, stocks, date) {
    $scope.stocks = stocks;
    $scope.date = date;
    $scope.$on('date.updated', function () {
      $scope.date = dateService.getCurrent();
    });
}]);
