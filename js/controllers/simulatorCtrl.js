fideligard.controller("simulatorCtrl", ['$scope', '$state', function($scope, $state){

  console.log("inside simulatorCtrl");
  console.log($state.current.name.replace("simulator.",""));
  $scope.state = $state.current.name.replace("simulator.","");


  $scope.changeState = function(){
    console.log("changing state");
    $state.go('simulator.'+$scope.state);
  };
}]);
