fideligard.controller("transactionsCtrl", ['$scope', '$state', function($scope, $state){
  $scope.state = "transactions";

  console.log("inside transactionsCtrl")

  $scope.changeState = function(){
    console.log("changing state")
    $state.go('simulator.'+$scope.state)
  }
}]);
