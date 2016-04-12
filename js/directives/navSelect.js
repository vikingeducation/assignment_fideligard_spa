simulator.directive('navSelect', ['$state', function($state){
  return {
    templateUrl: 'js/directives/navSelect.html',
    restrict: 'E',
    scope: {},
    link: function(scope){
      var getOptions = function(){
        return $state.get()
          .filter(function(state){ return state.parent === "main"; })
          .map(function(state){ return state.name; });
      };

      scope.currentPage = $state.current.name;
      scope.options = getOptions();

      scope.go = function(){
        $state.go(scope.currentPage);
      };
    }
  };
}]);