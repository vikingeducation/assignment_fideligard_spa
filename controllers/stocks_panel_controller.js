fideligardApp.controller('stocksPanelCtrl', ['$scope', 'stocksService', function($scope, stocksService){

  stocksService.all().then(stocks){
    $scope.stocks = stocks;
  }

}]);
