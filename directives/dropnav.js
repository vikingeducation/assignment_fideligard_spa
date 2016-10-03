Fideligard.directive('dropnav', ['$state', function($state){

  return {
    templateUrl: 'directives/dropnav.html',
    restrict: 'E',
    scope: {
      initial: '='
    },
    link: function(scope){
      scope.$watch('switch', function(value) {
        if(value) {
          $state.go(value);
        }
      });
    }
  }

}]);