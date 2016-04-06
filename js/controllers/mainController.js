simulator.controller('MainCtrl', ['$scope', '$state', function($scope, $state){

  var getOptions = function(){
    return $state.get().map(function(state){
      if (state.parent === 'main') {
        return state.name;
      }
    });
  };

  $scope.currentPage = $state.current.name;
  $scope.options = getOptions();

  $scope.go = function(){
    $state.go($scope.currentPage);
  };
}]);