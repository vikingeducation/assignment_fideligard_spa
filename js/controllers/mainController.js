simulator.controller('MainCtrl', ['$scope', '$state', function($scope, $state){

  var getOptions = function(){
    return $state.get()
      .filter(function(state){ return state.parent === "main"; })
      .map(function(state){ return state.name; });
  };

  $scope.currentPage = $state.current.name;
  $scope.options = getOptions();

  $scope.go = function(){
    $state.go($scope.currentPage);
  };
}]);