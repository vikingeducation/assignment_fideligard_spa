fideligard.controller("portfolioCtrl", ['$scope', '$state', function($scope, $state){
  $scope.state = "portfolio";

  console.log("inside portfolioCtrl")

  $scope.changeState = function(){
    console.log("changing state")
    $state.go('simulator.'+$scope.state)
  }
}]);
