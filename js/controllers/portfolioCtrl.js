fideligard.controller("portfolioCtrl", ['$scope', '$state', function($scope, $state){
  $scope.state = "portfolio";


  $scope.changeState = function(){
    $state.go('simulator.'+$scope.state);
  };
}]);
