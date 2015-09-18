fideligard.controller("simulatorCtrl", ['$scope', '$state', function($scope, $state){

  $scope.state = $state.current.name.replace("simulator.","");


  $scope.changeState = function(){
    $state.go('simulator.'+$scope.state);
  };
}]);
