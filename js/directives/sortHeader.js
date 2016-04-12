simulator.directive('sortHeader', function(){
  return {
    templateUrl: 'js/directives/sortHeader.html',
    restrict: 'AE',
    scope: {
      label: "@",
      setOrderBy: '@',
      sort: "="
    },
    link: function(scope){
      // first time the header is clicked, change sort to that 
      // column, and order a-z.  if clicked again, reverse sort
      scope.updateSort = function(){
        if (scope.sort.orderBy === scope.setOrderBy) {
          scope.sort.orderByReverse = !scope.sort.orderByReverse;
        } else {        
          scope.sort.orderBy = scope.setOrderBy; 
          scope.sort.orderByReverse = false;
        }
      };
    }
  };
});