simulator.directive('sortHeader', function(){
  return {
    templateUrl: 'js/directives/sortHeader.html',
    restrict: 'AE',
    scope: {
      header: '=',
      sort: "="
    }
  };
});