financialApp.controller('StocksCtrl', ['$scope', 'dateService', function($scope, dateService){

  $scope.dateInfo = dateService.getDateInfo();

}]);
