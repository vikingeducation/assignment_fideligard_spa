app.controller('StocksCtrl', ['$scope', 'StockService', function($scope, StockService) {

  StockService.all();

}]);
