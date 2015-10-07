fideligard.controller('StocksCtrl',
  ['$scope', 'stockAPI',
  function($scope, stockAPI) {

    $scope.stocks = [stockAPI.getStocks(0)];

  }]);