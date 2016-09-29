Fideligard.controller('TransactionCtrl', ['$scope', 'yqlService', function($scope, yqlService){

  yqlService.getStocks().then(function(response){
    $scope.test = response;
    console.log(response);
  });

}]);