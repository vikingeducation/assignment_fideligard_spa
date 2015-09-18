fideligard.controller("transactionsCtrl", ['$scope', '$state', function($scope, $state){
  $scope.state = "transactions";


  $scope.changeState = function(){
    $state.go('simulator.'+$scope.state);
  };
}]);
