Fideligard.controller('TransactionCtrl', ['$scope', 'yqlService', function($scope, yqlService){

  $scope.quotes = yqlService.getStocks();

}]);